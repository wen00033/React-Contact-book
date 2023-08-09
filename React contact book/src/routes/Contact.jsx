import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Dropdown from "../components/dropdown";

import db from "../db";

function Contact() {
  const navigate = useNavigate();
  const params = useParams();
  const [contact, setContact] = useState({
    Message: "",
    image: "",
    phone: "",
    first_name: "",
    last_name: "",
    email: "",
    age: "",
  });
  useEffect(() => {
    getDoc(doc(db, "contact", params.id)).then((el) => {
      setContact({
        Message: el.data().Message,
        image: el.data().image,
        phone: el.data().phone,
        first_name: el.data().first_name,
        last_name: el.data().last_name,
        email: el.data().email,
        age: el.data().age,
      });
    });
  }, []);

  function delectHandler() {
    deleteDoc(doc(db, "contact", params.id)).then(() => navigate("/mycontact"));
  }

  return (
    <div className="bg-teal-100">
      <div className="pt-6 flex flex-col ">
        <img
          className=" mt-2 self-center  h-6/6 w-6/6 sm:h-1/6  sm:w-1/6 rounded-full"
          src={contact.image}
          alt="image"
        ></img>
        {/* ------------------------------------------- */}

        <Dropdown />
        {/* ----------------------------------- */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {contact.first_name + " " + contact.last_name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {contact.age} years old
            </p>

            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <form className="mt-10">
              <div>
                <h3 className=" bg-white  py-2 px-3 rounded-full text-base text-gray-900">
                  Phone Number : {contact.phone}
                </h3>
              </div>
            </form>
          </div>

          <div className="py-3 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>
              <h3 className="bg-teal-400 inline-block p-2 rounded-full text-white text-sm mb-3 font-black">
                Message 💕
              </h3>
              <div className="space-y-6">
                <p className=" bg-white py-2 px-3 rounded-full text-base text-gray-900">
                  {contact.Message}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              onClick={delectHandler}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Delete 😢
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
