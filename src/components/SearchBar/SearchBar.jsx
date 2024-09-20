import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaSearch} from "../../helpers/validateForm";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Full name</span>
        <input placeholder="Enter full name" type="text" {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </label>

      <label>
        <span>Email</span>
        <input placeholder="Enter email participant" type="text" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
