import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import db from "../db";

function myContact() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const dataCollection = collection(db, "contact");
    const dataQuery = query(dataCollection, orderBy("first_name"));
    const dataSnapshot = onSnapshot(dataQuery, (snapshot) => {
      const data = [];
      snapshot.forEach((el) =>
        data.push({
          id: el.id,
          message: el.data().Message,
          image: el.data().image,
          phone: el.data().phone,
          firstName: el.data().first_name,
          lastName: el.data().last_name,
          email: el.data().email,
          age: el.data().age,
        })
      );
      setContact(data);
    });
  }, []);

  return (
    <div className=" bg-teal-100 px-5 pt-2 h-screen">
      <ul role="list" className="divide-y divide-gray-100">
        {contact.map((person) => (
          <Link key={person.id} to={"/mycontact/" + person.id}>
            <li className=" hover:bg-teal-200 transition-all ease-in px-4 rounded-lg  flex justify-between py-2">
              <div className="flex min-w-0 gap-x-3">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={person.image}
                  alt=""
                />
                <div className=" flex align-bottom ">
                  <p className="text-xl font-semibold self-center  text-gray-900">
                    {person.firstName} {person.lastName}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default myContact;
