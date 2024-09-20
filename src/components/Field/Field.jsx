import {DatePicker} from "antd";
import {Controller} from "react-hook-form";

const Field = ({type, label, register, control}) => {
  if (type === "radio") {
    return (
      <span>
        <span className="mb-[16px]">Where did you hear about this event?</span>

        <ul className="flex gap-[16px]">
          {label.map((item, i) => (
            <li key={i + 47}>
              <label>
                <input type={type} {...register} name="source" value={item} />
                <span className="font-gown ml-[4px]">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </span>
    );
  }

  if (type === "date") {
    return (
      <label>
        <span className="flex flex-col">{label}</span>
        <Controller
          control={control}
          name={register.name}
          render={({field}) => (
            <DatePicker
              onChange={(date) => field.onChange(date)}
              className="field hover:outline-none hover:bg-transparent focus-within:bg-transparent"
              style={{fontFamily: "Raleway", fontSize: "16px"}}
              format={{
                format: "YYYY-MM-DD",
                type: "mask",
              }}
            />
          )}
        />
      </label>
    );
  }
  return (
    <label>
      {label}
      <input type={type} className="field" {...register} />
    </label>
  );
};
export default Field;
