import React, { useState } from "react";
import { Button, Textarea } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { DialogFooter } from "@material-tailwind/react";
import { useBioDataMutation } from "../../Store/Services/userBioData";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase/firebase";
import { setloader } from "@/Store/lib/features/loaderSlice";
import { useDispatch } from "react-redux";



const EditForm = () => {
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [sendUserBioData] = useBioDataMutation();
  const { setBoolean } = setloader()
  const dispatch = useDispatch() 
  const storedUser = JSON.parse(localStorage.getItem("User"));

  const [formData, setFormData] = useState({
    img: imgUrl,
    name: "",
    location: "",
    bio: "",
    userid: storedUser.id,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImg(file);
  };

  const handleChange = (field, value) => {
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setloader(true))

    try {
      const storageRef = ref(storage, "images/" + img.name);
      await uploadBytes(storageRef, img);
      const imageURL = await getDownloadURL(storageRef);
      const updatedFormData = {
        ...formData,
        img: imageURL,
      };

      console.log(updatedFormData);
      dispatch(setloader(false))

      setFormData(updatedFormData);
      const res = await sendUserBioData(updatedFormData);
      console.log(res);
    } catch (error) {
      console.log(error);
      dispatch(setloader(false))
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="img"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <img
                    src={formData?.img}
                    alt="User Profile"
                    className="h-12 w-12 rounded-full"
                  />

                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="img" // Ensure the name attribute is set to "img"
                    accept="image/"
                    required
                    // aria-invalid="true"
                    id="id_img"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  />
                </div>
              </div>

              <div className="sm:col-span-4" style={{ marginTop: "-10px" }}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter your name"
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full " style={{ marginTop: "-10px" }}>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    autoComplete="location"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter your location"
                    onChange={(e) => handleChange("location", e.target.value)}
                  />
                </div>
              </div>

              <div
                className="sm:col-span-4"
                style={{ marginTop: "-10px", marginBottom: "-50px" }}
              >
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Write a few sentences about yourself.
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <div style={{ width: "400px" }}>
                      <Textarea
                        sx={{ width: "100%", outline: "none" }}
                        onChange={(e) => handleChange("bio", e.target.value)}
                        placeholder="Bio........"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button color="red" className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" type="submit">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};

export default EditForm;
