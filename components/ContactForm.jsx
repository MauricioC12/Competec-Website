"use client"
import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Form submitted successfully');
        event.target.reset();
      } else {
        const result = await response.json();
        setStatus(result.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
            Nombres
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900">
            Cargo
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="position"
              id="position"
              required
              autoComplete="charge"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
            Empresa
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              required
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Correo Comercial
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
            Número Telefónico
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">
            ¿Servicios de interés?
          </label>
          <div className="mt-2.5">
            <div className="flex items-center mb-1">
              <input
                id="cloud"
                name="service"
                type="radio"
                value="Cloud Solutions"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="cloud" className="ml-3 block text-sm font-medium text-gray-700">
                Cloud Solutions
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="cybersecurity"
                name="service"
                type="radio"
                value="Ciberseguridad"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="cybersecurity" className="ml-3 block text-sm font-medium text-gray-700">
                Ciberseguridad
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="webDesign"
                name="service"
                type="radio"
                value="Diseño y Desarrollo Web"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="webDesign" className="ml-3 block text-sm font-medium text-gray-700">
                Diseño y Desarrollo Web
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="itTraining"
                name="service"
                type="radio"
                value="Capacitaciones IT"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="itTraining" className="ml-3 block text-sm font-medium text-gray-700">
                Capacitaciones IT
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="other"
                name="service"
                type="radio"
                value="Otro"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="other" className="ml-3 block text-sm font-medium text-gray-700">
                Otro
              </label>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            Mensaje
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
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
      </div>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
