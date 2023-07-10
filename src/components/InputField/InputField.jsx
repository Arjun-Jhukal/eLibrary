const InputField = ({ fieldType, inputType, placeholder, onChange, reference, name, value, label, min, max }) => {
  switch (fieldType) {
    case "input":
      return (
        <div className="input__field">
          {label ? <label>{label}</label> : ""}
          <input
            type={inputType}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            ref={reference}
            min={min && min}
            max={max && max}
          />
        </div>
      );
    case "textarea":
      return (
        <div className="input__field">
          {label ? <label>{label}</label> : ""}
          <textarea type={inputType} name={name} value={value} placeholder={placeholder} onChange={onChange} ref={reference} />
        </div>
      );

    default:
      return (
        <div className="input__field">
          <label>{label}</label>
          <input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} ref={reference} />
        </div>
      );
  }
};

export default InputField;
