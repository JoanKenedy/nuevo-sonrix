import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vjsgcgu", "template_6zaimc5", form.current, {
        publicKey: "Ci4SR9bW8b-kMWaQk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
            Nombre
          </label>
          <input
            type="text"
            name="user_nombre"
            className="border-gray-300 rounded-lg "
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
          >
            <option value="valoracion">Valoración</option>
            <option value="urgencia">Urgencia</option>
            <option value="limpieza">Limpieza dental</option>
            <option value="diseno">Diseño de sonrisa</option>
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
          >
            <option value="8am a 12pm">8am a 12pm</option>
            <option value="12pm a 4pm">12pm a 4pm</option>
            <option value="4pm a 7pm">4pm a 7pm</option>
          </select>
        </div>
        <div className=" w-full md:w-[98%] flex flex-col ">
          <label htmlFor="" className="text-sm w-full">
            Mensaje
          </label>
          <textarea
            id=""
            name="user_mensaje"
            className="border-gray-300 rounded-lg "
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
    </>
  );
};
