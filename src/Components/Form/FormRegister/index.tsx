import { useForm } from "react-hook-form";
import { InputFild } from "../../input/InputFild";
import { FormContainer } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { useUser } from "../../../Providers/User";

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const FormRegister = () => {
  const { registry } = useUser();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("obrigatório")
      .matches(/^[a-zA-Z \u00C0-\u00FF]+$/, "deve ter somente letras"),
    email: yup.string().email("invalido").required("obrigatório"),
    password: yup
      .string()
      .required("obrigatória")
      .matches(/^.{8,}$/, "deve ter ao menos 8 digitos")
      .matches(/[A-Z]/, "deve ter ao menos uma letra maiúscula")
      .matches(/[a-z]/, "deve ter ao menos uma letra minúscula")
      .matches(/[0-9]/, "deve ter ao menos um número")
      .matches(/[#?!@$%^&*-]/, "deve ter ao menos um caracter espcial"),
    passwordConfirm: yup
      .string()
      .required("obrigatório")
      .oneOf([yup.ref("password")], "não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = ({ name, email, password }: FormData) => {
    const user = {
      name,
      email,
      password,
    };
    registry(user);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <InputFild
          register={register}
          id={"name"}
          name={"Nome"}
          type="text"
          width={"327px"}
          error={!!errors.name}
          messageerror={errors.name?.message}
        />
        <InputFild
          register={register}
          id={"email"}
          name={"Email"}
          type="text"
          width={"327px"}
          error={!!errors.email}
          messageerror={errors.email?.message}
        />
        <InputFild
          register={register}
          id={"password"}
          name={"Senha"}
          width={"327px"}
          type="password"
          error={!!errors.password}
          messageerror={errors.password?.message}
        />
        <InputFild
          register={register}
          id={"passwordConfirm"}
          name={"Confirmar senha"}
          width={"327px"}
          type="password"
          error={!!errors.passwordConfirm}
          messageerror={errors.passwordConfirm?.message}
        />
        <Button
          fontColor={"var(--grey5)"}
          width={347}
          height={60}
          backGroundColor={"var(--grey0)"}
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
    </FormContainer>
  );
};
