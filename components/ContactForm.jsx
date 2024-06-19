"use client"
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../app/firebaseConfig'

async function addDataToFireStore(name, position, company, email, phone, service, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      position: position,
      company: company,
      email: email, 
      phone: phone,
      service: service,
      message: message
    });
    return true;
  } catch (error) {
    console.error("Error adding document ", error)
    return false;
  }
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const added = await addDataToFireStore(name, position, company, email, phone, service, message);
    if (added) {
      setName("")
      setPosition("")
      setCompany("")
      setEmail("")
      setPhone("")
      setService("")
      setMessage("")
      setMessageSent(true)
      setTimeout(() => {
        setMessageSent(false)
      }, 3000);
    }
  }

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={position}
              onChange={(e) => setPosition(e.target.value)}
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
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
                onChange={(e) => setService(e.target.value)}
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
                onChange={(e) => setService(e.target.value)}
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
                onChange={(e) => setService(e.target.value)}
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
                onChange={(e) => setService(e.target.value)}
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
                onChange={(e) => setService(e.target.value)}
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
              value={message}
                onChange={(e) => setMessage(e.target.value)}
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
          <p className="mt-2 text-center text-green-600">Mensaje enviado!</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
