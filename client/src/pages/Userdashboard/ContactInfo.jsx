const ContactInfo = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <form className="  w-[90%] rounded-[20px] p-10  ">
        <div className=" bg-gray-200 flex flex-col justify-evenly rounded-[20px]  bg-opacity-70  gap-10 border py-20  px-20">
          <div className="flex  flex-row justify-start  items-center  gap-10">
            <div className="flex flex-row justify-evenly gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <h1 htmlFor="instagram" className="text-3xl w-auto font-semibold">
                Instagram Profile :
              </h1>
            </div>
            <input
              type="url"
              id="instagram"
              name="instagram"
              className="py-5 px-[25%]  rounded-lg"
              required
            />
          </div>
          <div className="flex  flex-row justify-start  items-center  gap-10">
            <div className="flex flex-row justify-center gap-4 mr-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <h1 htmlFor="LinkedIn" className="text-3xl font-semibold">
                LinkedIn Profile :
              </h1>
            </div>
            <input
              type="url"
              id="LinkedIn"
              name="LinkedIn"
              className="py-5 px-[25%] rounded-lg"
              required
            />
          </div>
          <div className="flex  flex-row justify-start  items-center  gap-10">
            <div className="flex flex-row justify-center gap-4 mr-16 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
              <h1 htmlFor="contactNumber" className="text-3xl font-semibold">
                Contact Number:
              </h1>
            </div>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="py-5 px-[25%] rounded-lg"
              required
            />
          </div>
          <div className="flex  flex-row justify-start  items-center  gap-10">
            <div className="flex flex-row justify-center gap-4 mr-36 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                
              </svg>
              
              <h1 htmlFor="email" className="text-3xl font-semibold">
                Email ID:
              </h1>
            </div>
            <input
              type="email"
              id="email2"
              name="email"
              className="py-5 px-[25%] rounded-lg"
              required
            />
          </div>
          <div className="flex items-center justify-center ">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-900 text-white font-semibold text-2xl py-6 px-20 rounded-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
