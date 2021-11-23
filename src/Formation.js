import React from "react";
import "./index.css";

const checkInvalid = (target) => {
  if (!target.checkValidity()) {
    target.parentElement.classList.toggle("error", true);
    target.parentElement.classList.toggle("valid", false);
    setError(target);
  } else {
    target.parentElement.classList.toggle("valid", true);
    target.parentElement.classList.toggle("error", false);
    setValid(target);
  }
};
const setError = (target) => {
  target.parentElement.children[2].style.visibility = "hidden";
  target.parentElement.lastElementChild.style.visibility = "visible";
  target.parentElement.children[3].style.visibility = "visible";
  if (target.value === "" || target.value === null) {
    target.parentElement.lastElementChild.innerText = "Input is required.";
  } else if (target.validity.tooLong || target.validity.tooShort) {
    target.parentElement.lastElementChild.innerText = `Characters must be between ${target.getAttribute(
      "minlength"
    )} - ${target.getAttribute("maxlength")} characters.`;
  } else if (target.validity.typeMismatch) {
    target.parentElement.lastElementChild.innerText =
      "Input is not in the required syntax.";
  }
};

const setValid = (target) => {
  target.parentElement.lastElementChild.style.visibility = "hidden";
  target.parentElement.children[3].style.visibility = "hidden";
  target.parentElement.children[2].style.visibility = "visible";
};

export const FormContainer = ({
  endpoint,
  children,
  header = null,
  styleObject = null,
}) => {
  return (
    <div id="container">
      {header && <h1>{header}</h1>}
      <form
        style={styleObject}
        method="Post"
        acceptCharset="UTF-8"
        action={endpoint}
        className="form-container"
      >
        {children}
      </form>
    </div>
  );
};
// inputFields
export const Input = ({
  type,
  label,
  name,
  min,
  max,
  required = true,
  styleObject = null,
  value = null,
}) => {
  return (
    <>
      {type === "checkbox" || type === "radio" ? (
        <div className={type}>
          <input
            style={styleObject}
            value={value}
            type={type}
            name={name}
            id={name}
            required={required && type !== "checkbox" ? true : false}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      ) : (
        <div className={type}>
          <label htmlFor={name}>{label}</label>
          <input
            style={styleObject}
            value={value}
            type={type}
            name={name}
            id={name}
            minLength={min ? min : null}
            maxLength={max ? max : null}
            required={required ? true : false}
            onInput={(e) => {
              if (e.target.getAttribute("name")) {
                checkInvalid(e.target);
              }
            }}
          />
          <i className="fas fa-check-circle">&#10003;</i>
          <i className="fas fa-exclamation-circle">!</i>
          <small>Error Msg</small>
        </div>
      )}
    </>
  );
};

export const Submit = ({ name = "Submit", styleObject = null }) => {
  return (
    <button style={styleObject} id="btn-submit" type="submit">
      {name}
    </button>
  );
};

export const Label = ({ htmlFor, label, styleObject = null }) => {
  return (
    <label style={styleObject} className="label" htmlFor={htmlFor}>
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
    <select style={styleObject} id={name} name={name} multiple={multiple}>
      {optionArray.map((innerArray, index) => {
        return (
          <option key={index + innerArray[0]} value={innerArray[0]}>
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
      style={styleObject}
      name={name}
      id={name}
      cols={cols}
      required={required}
      placeholder={placeholder}
    ></textarea>
  );
};
