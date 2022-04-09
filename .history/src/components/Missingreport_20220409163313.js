import React, { useState } from "react";

const Missingreport = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () => {};

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploaded
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};
export default Missingreport;