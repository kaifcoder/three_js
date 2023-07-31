import React from "react";
import CustomButton from "./CustomButton";

const AIpicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        name="prompt"
        id="promptbox"
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="mt-4 flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            title="Asking Ai.."
            type="outlined"
            customStyles="text-sm p-2"
          />
        ) : (
          <>
            <CustomButton
              title="Logo"
              handleClick={() => handleSubmit("logo")}
              type="outlined"
              customStyles="text-sm p-2"
            />
            <CustomButton
              title="Full"
              handleClick={() => handleSubmit("full")}
              type="filled"
              customStyles="text-sm p-2"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIpicker;
