import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { Josefin_Sans, Lato } from "next/font/google";
import LoginFormDB from "./LoginFormDB";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function LogInModalToggle() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className={` lg:hidden rounded-md px-8 font-normal border border-[#29FEFD] bg-inherit text-[#29FEFD] hover:bg-[#29FEFD] hover:text-black ${josefine.className}`}
      >
        ACCEDE
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-white bg-gradient-to-b from-[#9E1056] to-[#312971] text-white",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className={`flex flex-col justify-center items-center lg:pt-[113px] font-bold text-[32px] ${josefine.className} `}
              >
                Iniciar sesión
              </ModalHeader>
              <ModalBody>
                {/* <LogInForm /> */}
                <LoginFormDB />

                <div className={`flex py-2 px-1 justify-between `}>
                  <Checkbox
                    classNames={{
                      label: `text-small text-white `,
                    }}
                  >
                    Recuerdame
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
