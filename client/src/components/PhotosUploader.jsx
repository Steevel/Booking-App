import { useState } from "react";
import axios from "axios";

const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  };

  const uploadPhoto = async (e) => {
    const files = e.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    const { data: filenames } = await axios.post("/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    onChange((prev) => {
      return [...prev, ...filenames];
    });
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add using a link ...jpg"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          onClick={addPhotoByLink}
          className="px-4 m-1.5 bg-gray-200 grow rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 ">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="flex h-32" key={link}>
              <img
                className="object-cover w-full rounded-2xl"
                src={"http://localhost:4000/uploads/" + link}
              />
            </div>
          ))}
        <label className="flex items-center justify-center h-32 gap-1 p-2 text-2xl text-gray-600 bg-transparent border cursor-pointer rounded-2xl">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;
