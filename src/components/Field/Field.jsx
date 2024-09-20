import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import {MdOutlineEditCalendar} from "react-icons/md";

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

  const [date, setDate] = useState(new Date());

  if (type === "date") {
    return (
      <label>
        <span>{label}</span>
        <DatePicker
          showIcon
          icon={<MdOutlineEditCalendar />}
          selected={date}
          onChange={(date) => setDate(date)}
          minDate={new Date(1970, 0, 1)}
          maxDate={new Date()}
          dateFormat={"dd.mm.yyyy"}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </label>
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
