import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export const Formulario = () => {
  const form = useRef();
  const [openVerificacion, setOpenVerificacion] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dtp7hrw", "template_6zaimc5", form.current, {
        publicKey: "Ci4SR9bW8b-kMWaQk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setTimeout(() => {
            setOpenVerificacion(true);
          }, "1000");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <form
        action=""
        ref={form}
        onSubmit={sendEmail}
        className="bg-white px-5 py-3 flex flex-col gap-2 rounded-lg md:px-10 md:py-12 md:flex-row md:flex-wrap"
      >
        <div className="flex justify-center items-center w-full">
          <h3 className="text-3xl font-bold uppercase md:text-4xl">Contacto</h3>
        </div>

        <div className="flex flex-col gap-1 md:w-[97%]">
          <label htmlFor="" className="text-sm">
            Nombre y Apellidos
          </label>
          <input
            type="text"
            name="user_nombre"
            className="border-gray-300 rounded-lg "
            required
            minlength="5"
          />
        </div>
        <div className="flex flex-col gap-1 md:w-[48%]">
          <label htmlFor="" className="text-sm">
            Teléfono
          </label>
          <input
            type="tel"
            name="user_telefono"
            className=" border-gray-300 rounded-lg "
            minlength="10"
            maxlength="10"
            required
          />
        </div>
        <div className="flex flex-col gap-1 md:w-[48%]">
          <label htmlFor="" className="text-sm">
            Tipo de paciente
          </label>
          <select
            id=""
            name="user_cliente"
            className="border-gray-300 rounded-lg  "
            required
          >
            <option value="adulto">Adulto</option>
            <option value="infantil">Infantil</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 md:w-[48%]">
          <label htmlFor="" className="text-sm">
            Tipo de cita
          </label>
          <select
            id=""
            name="user_tipoCita"
            className="border-gray-300 rounded-lg "
            required
          >
            <option value="valoracion">Valoración</option>
            <option value="urgencia">Urgencia</option>
            <option value="limpieza">Limpieza dental</option>
            <option value="diseno sonrisa">Diseño de sonrisa</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 md:w-[48%]">
          <label htmlFor="" className="text-sm">
            Preferencia de horario
          </label>
          <select
            id=""
            name="user_horario"
            className="border-gray-300 rounded-lg  "
            required
          >
            <option value="8:00am a 12:00pm">8:00am a 12:00pm</option>
            <option value="12:00pm a 16:00pm">12:00pm a 16:00pm</option>
            <option value="16:00pm a 19:00pm">16:00pm a 19:00pm</option>
          </select>
        </div>
        <div className=" w-full md:w-[98%] flex flex-col ">
          <label htmlFor="" className="text-sm w-full">
            Mensaje
          </label>
          <textarea
            id=""
            name="user_mensaje"
            className="border-gray-300 rounded-lg text-xs "
            required
            minlength="10"
            placeholder="Aquí puedes esribir tus dudas, preguntas o simplemente un mensaje"
          ></textarea>
        </div>

        <div className="flex flex-col  w-[48%] m-auto ">
          <input
            type="submit"
            name=""
            value="Enviar"
            className="bg-black text-white py-2 rounded-lg mt-2 md:text-base"
          />
        </div>
      </form>
      <Dialog
        open={openVerificacion}
        onClose={setOpenVerificacion}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckBadgeIcon
                      aria-hidden="true"
                      className="h-7 w-7 text-green-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Mensaje de Verificación
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Tu información se ha enviado con éxito, nos pondremos en
                        contacto lo más pronto posible. <br /> Gracias por
                        confiar en Dental Sonrix.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-center items-center">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpenVerificacion(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cerrar
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
