const user = [
  {
    id: "1",
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane.smith@example.com",
  },
  {
    id: "3",
    name: "Bob Johnson",
    username: "bob_johnson",
    email: "bob.johnson@example.com",
  },
  {
    id: "4",
    name: "Bhhushan ",
    username: "bhush    ",
    email: "bhush@gmail.com",
  }
];

function FreelancerCard() {
  const card = user.map((user) => (
    <>
      <div key={user.id} className="border-2 m-10 bg-gray-200 rounded-[50px] p-10 w-85 h-60">
        <li key={user.id}>
          <h1 className=" text-center font-bold text-4xl">{user.name}</h1>
          <h3 className="text-center font-semibold text-2xl mt-5">{user.username}</h3>
          <h3 className="text-center font-semibold text-2xl mt-5">{user.email}</h3>
        </li>
      </div>
    </>
  ));

  return <ul>{card}</ul>;
}

export default FreelancerCard;
