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
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function RegisterModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className={`hidden lg:flex font-semibold rounded-md  px-8 bg-[#29FEFD] text-[#081540] hover:bg-[#EF107D] hover:text-white ${josefine.className} `}
      >
        REGISTRO
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="4xl"
        classNames={{
          body: "py-6   ",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-white bg-gradient-to-b from-[#9E1056] to-[#312971] text-white",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col-2 sm:justify-center sm:items-center lg:py-1   ">
                <div className="flex gap-4  lg:flex-row justify-center items-center  ">
                  <div className="relative ">
                    <img
                      src="/assets/images/ImgRegister.png"
                      alt=""
                      className=" hidden lg:flex lg:h-[725px] rounded-xl  "
                    />
                    <h1
                      className={`absolute top-16 left-1/2  -translate-x-1/2  hidden lg:flex font-bold text-[48px]  ${josefine.className}`}
                    >
                      TRIADA
                    </h1>
                    <h3
                      className={`absolute top-3/4 left-1/2  -translate-x-1/2  hidden lg:flex lg:w-[410px] font-medium text-[24px]  ${lato.className}`}
                    >
                      ¡Es hora de crear conexiones musicales para crear eventos
                      inovidables!
                    </h3>
                  </div>
                  <div className="flex flex-col justify-center items-center lg:-mt-20">
                    <h1
                      className={`flex font-bold justify-center text-center text-[32px] lg:hidden ${josefine.className}`}
                    >
                      TRIADA
                    </h1>
                    <h3
                      className={`flex text-center pt-[20px] sm:w-[365px] font-medium text-[20px] lg:hidden ${lato.className}`}
                    >
                      ¡Es hora de crear conexiones musicales para crear eventos
                      inovidables!
                    </h3>
                    <RegisterForm />
                  </div>
                </div>

                {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small text-white",
                    }}
                  >
                    Recuerdame
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div> */}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
