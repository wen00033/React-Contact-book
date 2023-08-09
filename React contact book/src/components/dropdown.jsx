import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import db from "../db";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { includes } from "lodash";

function Dropdown() {
  let [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    Message: "",
    phone: "",
    first_name: "",
    last_name: "",
    email: "",
    age: "",
  });

  function openModal() {
    setIsOpen(true);
  }
  function updateHandler(e) {
    e.preventDefault();
    if (includes(contact, "") !== true) {
      updateDoc(doc(db, "contact", params.id), contact).then(() =>
        navigate("/mycontact")
      );
    }
    if (includes(contact, "") === true) {
      alert("Please fill all the form and submit 🙌");
    }
  }

  function changeHandler(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  return (
    <div className=" flex flex-row justify-center mt-3 ">
      <button
        type="button"
        onClick={openModal}
        className=" rounded-md bg-teal-700  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50 focus:outline-none hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Edit Profile
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className=" bg-white p-3 rounded-xl absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Dialog.Panel>
            <form>
              <div>
                <label className="form-label mr-2">First name</label>
                <input
                  onChange={changeHandler}
                  className="my-1"
                  placeholder="Chris"
                  name="first_name"
                  type="text"
                />
              </div>
              <div>
                <label className="form-label mr-2">Last name</label>
                <input
                  onChange={changeHandler}
                  className="my-1"
                  placeholder="Wong"
                  name="last_name"
                  type="text"
                />
              </div>
              <div>
                <label className="form-label mr-2">Email</label>
                <input
                  onChange={changeHandler}
                  className="my-1"
                  placeholder="address@gmail.com"
                  name="email"
                  type="text"
                />
              </div>
              <div>
                <label className="form-label mr-2">Phone</label>
                <input
                  onChange={changeHandler}
                  className="my-1"
                  placeholder="1231231231"
                  name="phone"
                  type="number"
                />
              </div>
              <div>
                <label className="form-label mr-2">age</label>
                <input
                  onChange={changeHandler}
                  className="my-1"
                  placeholder="18"
                  name="age"
                  type="number"
                />
              </div>
              <div>
                <label className="form-label mr-2">Message</label>
                <input
                  onChange={changeHandler}
                  className="my-1"
                  placeholder="Tell me somthing..."
                  name="Message"
                  type="text"
                />
              </div>
              <button
                onClick={updateHandler}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Updated
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
export default Dropdown;
{
  /* <input
  placeholder="FirstName"
  name="title"
  type="text"
  value={contact.first_name}
/>; */
}
