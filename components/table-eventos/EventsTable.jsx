import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { SearchIcon } from "./SearchIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { columns, events, statusOptions } from "./data";
import { capitalize } from "./utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import Active from "../../public/assets/svg/active.svg";
import Alert from "../../public/assets/svg/alert-circle.svg";
import Finalized from "../../public/assets/svg/finalized.svg";
import Rejected from "../../public/assets/svg/rejected.svg";
import More from "../../public/assets/svg/add-circle.svg";
import ModalCliente from "../Modales/ModalCliente";
import ModalMusico from "../Modales/ModalMusico";
import useTokenStore from "@/stores/tokenStore";
const urlApi = process.env.NEXT_PUBLIC_API_URL;

const statusColorMap = {
  aceptado: Active,
  "en curso": Active,
  pendiente: Alert,
  finalizado: Finalized,
  rechazado: Rejected,
};

const INITIAL_VISIBLE_COLUMNS = [
  "evento",
  "fecha",
  "horario",
  "ubicación",
  "costo",
  "estatus",
  "más",
];

export default function EventsTable() {
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        tokenFromLocalStorage.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      useTokenStore.setState({ tokenObject: payloadObject });
    }
  }, []);

  const tokenObject = useTokenStore((state) => state.tokenObject);
  //console.log(tokenObject);
  const [events, setEvents] = useState([]);
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "fecha",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  // if (tokenObject.role === "musico") {
  //   useEffect(() => {
  //     async function fetchEvents() {
  //       try {
  //         const response = await fetch(
  //           `${urlApi}/events/${tokenObject._id}/events`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch events");
  //         }
  //         const data = await response.json();
  //         setEvents(data.data);
  //       } catch (error) {
  //         console.error("Error fetching events:", error);
  //       }
  //     }
  //     fetchEvents();
  //   }, []);
  // } else {
  //   useEffect(() => {
  //     async function fetchEvents() {
  //       try {
  //         const response = await fetch(
  //           `${urlApi}/events/${tokenObject._id}/eventsClient`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch events");
  //         }
  //         const data = await response.json();
  //         setEvents(data.data);
  //       } catch (error) {
  //         console.error("Error fetching events:", error);
  //       }
  //     }
  //     fetchEvents();
  //   }, []);
  // }
  useEffect(() => {
    async function fetchEvents() {
      try {
        const tokenFromLocalStorage = localStorage.getItem("token");
        const endpoint =
          tokenObject.role === "musico"
            ? `${urlApi}/events/${tokenObject._id}/events`
            : `${urlApi}/events/${tokenObject._id}/eventsClient`;
        const response = await fetch(endpoint, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenFromLocalStorage}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    if (tokenObject._id) {
      fetchEvents();
    }
  }, [tokenObject]);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       const response = await fetch(
  //         `${urlApi}/events/${tokenObject._id}/events`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch events");
  //       }
  //       const data = await response.json();
  //       setEvents(data.data);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     }
  //   }
  //   fetchEvents();
  // }, []);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       const response = await fetch(
  //         `${urlApi}/events/${tokenObject._id}/eventsClient`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch events");
  //       }
  //       const data = await response.json();
  //       setEvents(data.data);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     }
  //   }
  //   fetchEvents();
  // }, []);

  //console.log(events);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...events];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.estatus)
      );
    }

    return filteredUsers;
  }, [events, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((event, columnKey) => {
    const cellValue = event[columnKey];
    //console.log(event);

    switch (columnKey) {
      case "evento":
        return (
          <User
            avatarProps={{ radius: "lg", src: event.clientPicture }}
            //description={event.email}
            name={event.clientName}
          >
            {event.email}
          </User>
        );
      case "horario":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">
              {event.startHour} a {event.endHour}
            </p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">
              {event.team}
            </p> */}
          </div>
        );
      case "costo":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">$ {event.eventFee} MXN</p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">
              {event.team}
            </p> */}
          </div>
        );
      case "fecha":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">{event.date}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">
              {event.team}
            </p> */}
          </div>
        );
      case "ubicación":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">{event?.address?.city}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">
              {event.team}
            </p> */}
          </div>
        );
      case "estatus":
        return (
          <div className=" flex items-center gap-2 capitalize">
            <Image src={statusColorMap[event.status]} width={20} height={20} />
            <p>{event.status}</p>
          </div>
          // <Chip
          //   className="capitalize"
          //   color={statusColorMap[event.estatus]}
          //   size="sm"
          //   variant="flat"
          // >
          //   {cellValue}
          // </Chip>
        );
      case "más":
        return (
          <div className="relative flex  items-start p-0">
            {/* <ModalCliente></ModalCliente> */}
            {tokenObject.role === "musico" ? (
              <ModalMusico eventData={event} />
            ) : (
              <ModalCliente eventData={event} />
            )}
            {/* <ModalMusico eventData={event} /> */}

            {/* <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>Ver detalles</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Busca tu evento..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Estatus
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((estatus) => (
                  <DropdownItem key={estatus.uid} className="capitalize">
                    {capitalize(estatus.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            {/* <Button color="primary" endContent={<PlusIcon />}>
              Add New
            </Button> */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {events.length} eventos
          </span>
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    events.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex  justify-end items-center">
        {/* <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} de ${filteredItems.length} seleccionados`}
        </span> */}
        <Pagination
          isCompact
          showControls
          showShadow
          //color="primary"
          page={page}
          total={pages}
          onChange={setPage}
          classNames={{
            wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
            item: "w-8 h-8 text-small rounded-none bg-transparent",
            cursor: "bg-[#081540] text-white font-bold",
          }}
        />
        {/* <div className="hidden lg:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Anterior
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Siguiente
          </Button>
        </div> */}
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      //selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No se encontraron eventos"} items={sortedItems}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
