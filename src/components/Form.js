import React from "react";
import "./Form.css";

const Form = ({ text, setText, onCreate }) => {
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return (
    <div className="form">
      <input
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
        autoFocus
        required
      />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
