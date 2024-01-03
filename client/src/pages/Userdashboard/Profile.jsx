import { useState } from "react";
import "./profile.css";
// import Poppins from "../../assets/fonts/Poppins-Regular.ttf"

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [exp, setExp] = useState("");
  const [gender, setGender] = useState("");
  const [files, setFiles] = useState("");
  const [domain, setDomain] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [redirect, setRedirect] = useState(false);


  async function createNewPost(ev) {
    const data = new FormData();
    data.set("fullName", fullName);
    data.set("exp", exp);
    data.set("gender", gender);
    data.set("domain", gender);
    data.set("gender", gender);
    data.set("file", files[0]);
    ev.preventDefault();
    console.log(files);
    const response = await fetch("http://localhost:3001/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }



  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   yearsOfExperience: "",
  //   gender: "",
  //   language: "",
  //   portfolioLink: "",
  //   selectedFile: null,
  //   previewImage: null,
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleFileChange = (e) => {

  //   // Set the selected file
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     selectedFile: files,
  //   }));

  //   // Read and display the image preview
  //   if (files) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         previewImage: reader.result,
  //       }));
  //     };
  //     reader.readAsDataURL(files);
  //   }
  // };
  // const handleRemoveImage = () => {
  //   // Reset the selected file and preview image
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     selectedFile: null,
  //     previewImage: null,
  //   }));
  // };



  return (
    <div className=" ">
      <div className=" ">
        <form onSubmit={createNewPost} className="">
          <div className=" p-2 mt-20 ml-20 mb-20  gridfr">
            <div className="w-80 border translate-y-[-60px] ">
              <label
                htmlFor="image"
                className=" block py-2 text-start text-white text-2xl  font-semibold  "
              >
                Choose Profile Photo:
              </label>
              {/* {!formData.previewImage && ( <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className=" p-2 word-wrap items-center "
              />)} */}
             
                {/* {FormData.previewImage && (
                   <>
                   <div className="border-[2px] relative">
                     <img
                       src={formData.previewImage}
                       alt="Preview"
                       className="p-2 object-cover"
                     />
                   </div>
                   <button
                     type="button"
                     className="absolute mt-2 mx-16 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 cursor-pointer"
                     onClick={handleRemoveImage}
                   >
                     Remove
                   </button>
                 </>
                )} */}
              
            </div>

            <div className="ml-40 flex flex-col gap-12 justify-center">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block py-2 text-start text-white text-2xl  font-semibold "
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(ev) => setFullName(ev.target.value)}
                  required
                  className="border rounded-2xl text-2xl bg-gray-200 drop-shadow-2xl p-6  w-[86%]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block py-2 text-start text-white text-2xl  font-semibold"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border rounded-2xl text-2xl bg-gray-200 drop-shadow-2xl p-6  w-[86%]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col  mt-10 ml-20 mb justify-center ">
            <div className="grid grid-cols-2 gap-2 py-2">
              <div className="mx-4">
                <label
                  htmlFor="yearsOfExperience"
                  className="block py-2 text-start text-white text-2xl  font-semibold "
                >
                  Years of Experience:
                </label>
                <input
                  type="number"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={exp}
                  onChange={(ev) => setExp(ev.target.value)}
                  min="0"
                  required
                  className="border rounded-2xl bg-gray-200 drop-shadow-2xl p-6  w-[80%]"
                />
              </div>
              <div className="mx-4">
                <label
                  htmlFor="gender"
                  className="block py-2 text-start text-white text-2xl  font-semibold"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(ev) => setGender(ev.target.value)}
                  required
                  className="border text-xl rounded-2xl bg-gray-200 drop-shadow-2xl p-6  w-[80%]"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="mx-4">
                <label
                  htmlFor="language"
                  className="block py-2 text-start  text-white text-2xl  font-semibold"
                >
                  Language You Speak
                </label>
                <select
                  id="Domain"
                  name="Domain"
                  value={domain}
                  onChange={(ev) => setDomain(ev.target.value)}
                  required
                  className="border rounded-2xl bg-gray-200 text-black drop-shadow-2xl p-6  w-[80%]"
                >
                  <option value=""></option>
                  <option value="Hindi">WebDev</option>
                  <option value="English">FullStack</option>
                  <option value="Marathi">AI</option>
                </select>
              </div>
              <div className="mx-4 justify-center">
                <label
                  htmlFor="portfolioLink"
                  className="block py-2 text-start text-white text-2xl  font-semibold"
                >
                  Portfolio Link:
                </label>
                <input
                  type="url"
                  id="portfolioLink"
                  name="portfolioLink"
                  value={portfolio}
                  onChange={(ev) => setPortfolio(ev.target.value)}
                  required
                  className="border rounded-2xl bg-gray-200 drop-shadow-2xl p-6  w-[80%]"
                />
              </div>
            </div>
          </div>

          <div className="flex mt-10 justify-start ml-[42%]">
            <button
              type="submit"
              className=" bg-green-400 text-white py-2 rounded-full hover:bg-blue-900  font-semibold text-2xl px-16"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
