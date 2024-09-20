import Field from "../Field/Field";

const Form = ({fields, errors}) => {
  return (
    <ul className="flex flex-col gap-[24px] mb-[32px]">
      {fields.map((field, i) => (
        <li key={i}>
          <Field
            label={field.label}
            type={field.type}
            register={field.register}
            error={errors[field.register.name]}
            control={field.control}
          />
          {errors[field.register.name] && (
            <p className="error_text">{errors[field.register.name].message}</p>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Form;
