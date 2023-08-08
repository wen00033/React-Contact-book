import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "../db";
import { Switch } from "@headlessui/react";
import { includes } from "lodash";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Newcontact() {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    Message: "",
    image: "https://i.pravatar.cc/1000/?img=15",
    phone: "",
    first_name: "",
    last_name: "",
    email: "",
    age: "",
  });

  function changeHandler(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    if (includes(contact, "") !== true) {
      const c = collection(db, "contact");
      addDoc(c, contact).then(navigate("/mycontact"));
    }
    if (includes(contact, "") === true) {
      alert("Please fill all the form and submit 🙌");
    }
  }

  const [agreed, setAgreed] = useState(false);
  return (
    <div className=" bg-teal-100 px-6 py-5 sm:py-5 lg:px-6 ">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          New Contact
        </h2>
        <p className="mt-1 text-lg text-gray-600 whitespace-nowrap">
          Welcome to be my new contact❤️
        </p>
        <img
          className="inline-block mt-2 h-2/6 w-2/6 sm:h-1/6  sm:w-1/6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="image"
        ></img>
      </div>
      <form action="#" method="POST" className="mx-auto mt-4 max-w-xl sm:mt-4">
        <div className="grid grid-cols-1 gap-x-2 gap-y-1 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first_name"
                onChange={changeHandler}
                value={contact.first_name}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                onChange={changeHandler}
                value={contact.last_name}
                type="text"
                name="last_name"
                id="last_name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                onChange={changeHandler}
                value={contact.email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div>
              <input
                onChange={changeHandler}
                type="number"
                name="phone"
                id="phone"
                value={contact.phone}
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              age
            </label>
            <div>
              <input
                onChange={changeHandler}
                type="number"
                name="age"
                id="age"
                value={contact.age}
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="Message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Say something good to me
            </label>
            <div className="mt-2.5">
              <textarea
                onChange={changeHandler}
                value={contact.message}
                name="Message"
                id="Message"
                rows={2}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <div
            onClick={submitHandler}
            className="btn block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Contact
          </div>
        </div>
      </form>
    </div>
  );
}
