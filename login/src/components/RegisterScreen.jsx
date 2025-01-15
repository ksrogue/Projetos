import "./Screen.css";
import { Facebook, Twitter, Google } from "react-bootstrap-icons";

const RegisterScreen = () => {
  return (
    <form className="login_container" onSubmit={() => {}}>
      <h1>REGISTRAR</h1>
      <p>Por favor, insira seus dados!</p>

      <input type="text" name="text" placeholder="Seu nome" />
      <input type="email" name="email" placeholder="Seu email" />
      <input type="password" name="password" placeholder="Sua senha" />

      <input type="submit" value="Registrar" className="button" />
      <div className="icons">
        <a href="#">
          <Facebook className="icon" />
        </a>
        <a href="#">
          <Twitter className="icon" />
        </a>
        <a href="#">
          <Google className="icon" />
        </a>
      </div>
    </form>
  );
};

export default RegisterScreen;
