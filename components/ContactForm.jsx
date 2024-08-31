"use client";

import { useState } from "react";

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d7cea9ff-9733-449e-aece-124c0eaf9f5c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setMessageSent(true);
    } else {
      alert("Error al enviar el mensaje. Por favor intenta de nuevo!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Nombres
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Cargo
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="position"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Empresa
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Correo Comercial
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Número Telefónico
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phone"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            ¿Servicios de interés?
          </label>
          <div className="mt-2.5">
            <div className="flex items-center mb-1">
              <input
                name="service"
                type="radio"
                value="Cloud Solutions"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="cloud"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Cloud Solutions
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                name="service"
                type="radio"
                value="Ciberseguridad"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="cybersecurity"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Ciberseguridad
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                name="service"
                type="radio"
                value="Diseño y Desarrollo Web"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="webDesign"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Diseño y Desarrollo Web
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                name="service"
                type="radio"
                value="Capacitaciones IT"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="itTraining"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Capacitaciones IT
              </label>
            </div>
            <div className="flex items-center">
              <input
                name="service"
                type="radio"
                value="Otro"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="other"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Otro
              </label>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Mensaje
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-blue-600 hover:bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar Mensaje
        </button>
        {messageSent && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Éxito!</strong>
            <span className="block sm:inline"> Mensaje Enviado</span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setMessageSent(false)}
            >
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Cerrar</title>
                <path d="M14.348 5.652a1 1 0 1 0-1.414-1.414L10 7.586 7.066 4.652a1 1 0 0 0-1.414 1.414l2.934 2.934-2.934 2.934a1 1 0 0 0 1.414 1.414L10 10.414l2.934 2.934a1 1 0 0 0 1.414-1.414L11.414 10l2.934-2.934z" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
