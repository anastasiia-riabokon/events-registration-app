import Field from "../Field/Field";

const Form = ({fields, errors}) => {
  return (
    <ul>
      {fields.map((field, i) => (
        <li key={i}>
          <Field
            label={field.label}
            type={field.type}
            register={field.register}
            error={errors[field.register.name]}
          />
          {errors[field.register.name] && (
            <p className="error">{errors[field.register.name].message}</p>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Form;
