import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";

import {postNewParticipant} from "../../redux/participants/operations";
import {schemaRegister} from "../../helpers/validateForm";
import Form from "../../components/Form/Form";
import {useParams} from "react-router-dom";

const RegisterPage = () => {
  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newParticipant = {
      id,
      fullName: data.fullName,
      email: data.email,
      dateBirth: data.dateBirth,
      source: data.source,
    };
    console.log(newParticipant);
    dispatch(postNewParticipant(newParticipant));

    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Event Registration</h2>

      <Form
        errors={errors}
        fields={[
          {
            label: "Full name",
            type: "text",
            register: register("fullName"),
          },

          {
            label: "Email",
            type: "text",
            register: register("email"),
          },
          {
            label: "Date of birth",
            type: "date",
            register: register("dateBirth"),
          },
          {
            label: ["Social media", "Friends", "Found myself"],
            type: "radio",
            register: register("source"),
          },
        ]}
      />

      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterPage;
