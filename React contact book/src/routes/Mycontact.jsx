const people = [
  {
    id: 1,
    first_name: "Papagena",
    last_name: "Vieyra",
    email: "pvieyra0@illinois.edu",
    single: false,
    image: "https://xsgames.co/randomusers/assets/avatars/female/51.jpg",
    message:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    age: 32,
    phone: "(161) 4078515",
  },
  {
    id: 2,
    first_name: "Cathyleen",
    last_name: "Bridgestock",
    email: "cbridgestock1@illinois.edu",
    single: false,
    image: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
    message:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    age: 29,
    phone: "(813) 6163264",
  },
  {
    id: 3,
    first_name: "Payton",
    last_name: "Cotte",
    email: "pcotte2@woothemes.com",
    single: false,
    image: "https://xsgames.co/randomusers/assets/avatars/female/20.jpg",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    age: 20,
    phone: "(497) 8660200",
  },
  {
    id: 4,
    first_name: "Filmore",
    last_name: "Peacock",
    email: "fpeacock3@symantec.com",
    single: true,
    image: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
    message:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    age: 36,
    phone: "(803) 1664287",
  },
  {
    id: 5,
    first_name: "Jana",
    last_name: "Schimpke",
    email: "jschimpke4@walmart.com",
    single: false,
    image: "https://xsgames.co/randomusers/assets/avatars/female/50.jpg",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    age: 37,
    phone: "(540) 6839533",
  },
];

function myContact() {
  return (
    <div className=" bg-teal-100 px-10 py-10 h-screen">
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.id} className="flex justify-between  py-5">
            <div className="flex min-w-0 gap-x-3">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.image}
                alt=""
              />
              <div className=" flex align-bottom ">
                <p className="text-xl font-semibold self-center  text-gray-900">
                  {person.first_name} {person.last_name}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                {person.email}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default myContact;
