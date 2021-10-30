import { useHistory } from "react-router";
import { Button } from "../../Components/Button";
import { FormLogin } from "../../Components/Form/FormLogin";
import { LogoCard } from "../../Components/LogoCard";
import { PageLogin } from "./style";

export const Login = () => {
  const history = useHistory();

  return (
    <PageLogin>
      <LogoCard />
      <div className="formContainer">
        <h2>Login</h2>
        <FormLogin />
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Button
          fontColor={"var(--grey5)"}
          width={347}
          height={60}
          backGroundColor={"var(--grey0)"}
          type="button"
          onClick={() => history.push("/register")}
        >
          Cadastrar
        </Button>
      </div>
    </PageLogin>
  );
};
