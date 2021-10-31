import { useForm } from "react-hook-form";
import { InputFild } from "../../input/InputFild";
import { Button } from "../../Button";
import { useUser } from "../../../Providers/User";

interface FormData {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useUser();

  const onFormSubmit = (data: FormData) => {
    login(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <InputFild
          register={register}
          id={"email"}
          name={"Email"}
          type="text"
          width={"315px"}
        />
        <InputFild
          register={register}
          id={"password"}
          name={"Senha"}
          type="password"
          width={"315px"}
        />
        <Button
          fontColor={"white"}
          width={333}
          height={60}
          backGroundColor={"var(--green1)"}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};
