import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    yearsOfExperience: "",
    gender: "",
    language: "",
    portfolioLink: "",
    selectedFile: null,
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
    setFormData((prevData) => ({
      ...prevData,
      selectedFile: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };
  return (
    <div className=" ">
      <div className="border-black border-2 h-[95vh]">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4">
          <div>
            <div className="mb-4">
              <label htmlFor="image" className="block mb-2">
                Choose Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-4 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-2">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="border p-4 w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-4 w-full"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label htmlFor="yearsOfExperience" className="block mb-2">
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
                className="border p-4 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block mb-2">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="border p-4 w-full"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="language" className="block mb-2">
                Language:
              </label>
              <input
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className="border p-4 w-full"
              />
            </div>

            <div>
              <label htmlFor="portfolioLink" className="block mb-2">
                Portfolio Link:
              </label>
              <input
                type="url"
                id="portfolioLink"
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleChange}
                required
                className="border p-4 w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white p-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
