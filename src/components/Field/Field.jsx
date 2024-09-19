const Field = ({type, label, register, error}) => {
  if (type === "radio") {
    return (
      <ul>
        {label.map((item, i) => (
          <li key={i + 47}>
            <label>
              <input type={type} {...register} name="source" value={item} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <label>
      {label}
      <input type={type} className={error ? "errorField" : "inputField"} {...register} />
    </label>
  );
};
export default Field;
