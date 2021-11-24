import "../index.css";
import React, { useEffect, useState } from "react";

// Form
export const FormContainer = ({ endpoint, children, styleObject = null }) => {
  return (
    <form
      style={styleObject}
      method="Post"
      acceptCharset="UTF-8"
      action={endpoint}
      className="form-container"
    >
      {children}
    </form>
  );
};
// inputFields
// create individual state for every inputfield, to avoid direct DOM manipulation
export const Input = ({
  type,
  label,
  placeholder,
  name,
  min,
  max,
  required = true,
  styleObject = null,
  value = null,
}) => {
  const [isValid, setIsValid] = useState("untouched");
  const [errorMessage, setErrorMessage] = useState();
  useEffect(() => {
    if (!isValid) {
    }
  }, [isValid]);
  // this function checks whether the input is valid or not, and sets the state
  const getValidity = (target) => {
    setIsValid(target.checkValidity());
    console.log(isValid);
  };
  // this function returns a validity error message
  const getErrorMsg = (target) => {
    let errorMessage;
    if (target.value === "" || target.value === null) {
      errorMessage = "Input is required.";
    } else if (target.validity.tooLong || target.validity.tooShort) {
      errorMessage = `Characters must be between ${target.getAttribute(
        "minlength"
      )} - ${target.getAttribute("maxlength")} characters.`;
    } else if (target.validity.typeMismatch) {
      errorMessage = "Input is not in the required syntax.";
    }
    setErrorMessage(errorMessage);
  };
  return (
    <>
      {type === "checkbox" || type === "radio" ? (
        <div className={`${type}-container`}>
          <input
            className={type}
            style={styleObject}
            value={value}
            type={type}
            name={name}
            required={required && type !== "checkbox" ? true : false}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      ) : (
        <div
          className={`${
            isValid === true ? "valid" : isValid === false ? "error" : null
          } `}
        >
          <input
            className={type}
            style={styleObject}
            value={value}
            type={type}
            name={name}
            minLength={min ? min : null}
            maxLength={max ? max : null}
            required={required ? true : false}
            onInput={(e) => {
              // sets the isValid state
              getValidity(e.target);
              // sets value of errorMessage
              getErrorMsg(e.target);
            }}
            placeholder={placeholder}
          />
          {/* depending on whether valid is true or false display icon */}
          <i className="fas fa-check-circle">&#10003;</i>
          <i className="fas fa-exclamation-circle">!</i>
          {/* display error message if isValid is false, else don't display anything */}
          {isValid === true ? null : <small>{errorMessage}</small>}
        </div>
      )}
    </>
  );
};

export const Submit = ({ name = "Submit", styleObject = null }) => {
  return (
    <button style={styleObject} className="btn-submit" type="submit">
      {name}
    </button>
  );
};

export const Label = ({ name, label, styleObject = null }) => {
  return (
    <label style={styleObject} className="label" htmlFor={name}>
      {label}
    </label>
  );
};

export const Select = ({
  name,
  optionArray,
  multiple = false,
  styleObject = null,
}) => {
  return (
    <select
      className="select"
      style={styleObject}
      name={name}
      multiple={multiple}
    >
      {optionArray.map((innerArray, index) => {
        return (
          <option
            className="option"
            key={index + innerArray[0]}
            value={innerArray[0]}
          >
            {innerArray[1]}
          </option>
        );
      })}
    </select>
  );
};

export const TextArea = ({
  name,
  cols = 5,
  required = false,
  placeholder = null,
  styleObject = null,
}) => {
  return (
    <textarea
      className="textarea"
      style={styleObject}
      name={name}
      cols={cols}
      required={required}
      placeholder={placeholder}
    ></textarea>
  );
};
