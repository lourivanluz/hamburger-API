import { Link, useHistory } from "react-router-dom";
import { Button } from "../../Components/Button";
import { FormRegister } from "../../Components/Form/FormRegister";
import { LogoCard } from "../../Components/LogoCard";
import { PageRegister } from "./style";

export const Register = () => {
  const history = useHistory();

  return (
    <PageRegister>
      <div className="logoContainer">
        <LogoCard />
      </div>
      <div className="formContainer">
        <div className="headerForm">
          <h2>Cadastro</h2>
          <span onClick={() => history.push("/login")}>
            Retornar para o login
          </span>
        </div>

        <FormRegister />
      </div>
    </PageRegister>
  );
};
