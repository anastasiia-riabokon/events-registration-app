import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaSearch} from "../../helpers/validateForm";
import Button from "../Button/Button";

const SearchBar = ({onSearch}) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaSearch),
  });

  const onSubmit = (data) => {
    onSearch(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px] w-[250px]">
      <label>
        <span>Full name</span>
        <input
          placeholder="Enter full name"
          type="text"
          {...register("fullName")}
          className="field"
        />
        {errors.fullName && <p className="error_text">{errors.fullName.message}</p>}
      </label>

      <label>
        <span>Email</span>
        <input
          placeholder="Enter email participant"
          type="text"
          {...register("email")}
          className="field"
        />
        {errors.email && <p className="error_text">{errors.email.message}</p>}
      </label>

      <Button>Search</Button>
    </form>
  );
};
export default SearchBar;
