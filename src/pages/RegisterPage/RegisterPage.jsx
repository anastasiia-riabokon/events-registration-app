import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {FaArrowLeft} from "react-icons/fa6";

import {postNewParticipant} from "../../redux/participants/operations";
import {schemaRegister} from "../../helpers/validateForm";
import Form from "../../components/Form/Form";
import {Link, useParams} from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

const RegisterPage = () => {
  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: {errors},

    reset,
    control,
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

    dispatch(postNewParticipant(newParticipant));

    reset();
  };
  return (
    <div>
      <Link to="/events" className="goBack_link">
        <FaArrowLeft />
        Go Back
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Title text={"Event Registration"} />
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
              control,
            },
            {
              label: ["Social media", "Friends", "Found myself"],
              type: "radio",
              register: register("source"),
            },
          ]}
        />
        <Button>Register</Button>
      </form>
    </div>
  );
};
export default RegisterPage;
