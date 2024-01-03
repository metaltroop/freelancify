import { useState } from "react";
import "./profile.css";
// import Poppins from "../../assets/fonts/Poppins-Regular.ttf"

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    yearsOfExperience: "",
    gender: "",
    language: "",
    portfolioLink: "",
    selectedFile: null,
    previewImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Set the selected file
    setFormData((prevData) => ({
      ...prevData,
      selectedFile: file,
    }));

    // Read and display the image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          previewImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    // Reset the selected file and preview image
    setFormData((prevData) => ({
      ...prevData,
      selectedFile: null,
      previewImage: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };
  return (
    <div className=" ">
      <div className=" ">
        <form onSubmit={handleSubmit} className="">
          <div className=" p-2 mt-20 ml-20 mb-20  gridfr">
            <div className="h-80 w-60 border- translate-y-[-60px] ">
              <label
                htmlFor="image"
                className=" block py-2 text-start text-white text-2xl  font-semibold  "
              >
                Choose Profile Photo:
              </label>
              {!formData.previewImage && ( <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-2 w-80 h-96 word-wrap items-center "
              />)}
             
                {formData.previewImage && (
                   <>
                   <div className="border-[2px] relative">
                     <img
                       src={formData.previewImage}
                       alt="Preview"
                       className="p-2 w-80 h-96"
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
                )}
              
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
                  value={formData.fullName}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
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
                  value={formData.gender}
                  onChange={handleChange}
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
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  required
                  className="border rounded-2xl bg-gray-200 text-black drop-shadow-2xl p-6  w-[80%]"
                >
                  <option value=""></option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Marathi">Marathi</option>
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
                  value={formData.portfolioLink}
                  onChange={handleChange}
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
