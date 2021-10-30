import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { FormRegister } from "../../Components/Form/FormRegister";

export const Register = () => {
  return (
    <div>
      <h2>Cadastro</h2>
      <span>
        <Link to={"/login"}>Retornar para o login</Link>
      </span>
      <FormRegister />
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <Button
        fontColor={"var(--grey5)"}
        width={320}
        height={60}
        backGroundColor={"var(--grey0)"}
        type="button"
      >
        Cadastrar
      </Button>
    </div>
  );
};
