import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-700 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          title="Logo"
          handleClick={() => readFile("logo")}
          type="outlined"
          customStyles="text-sm p-2"
        />
        <CustomButton
          title="Full"
          handleClick={() => readFile("full")}
          type="filled"
          customStyles="text-sm p-2"
        />
      </div>
    </div>
  );
};

export default FilePicker;
