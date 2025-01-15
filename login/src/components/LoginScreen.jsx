import "./Screen.css";
import { Facebook, Twitter, Google } from "react-bootstrap-icons";

const LoginScreen = () => {
  return (
    <>
      <form className="login_container" onSubmit={() => {}}>
        <h1>LOGIN</h1>
        <p>Por favor, coloque seu usuário e sua senha!</p>

        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <a href="#">Esqueceu a senha?</a>

        <input type="submit" value="Entrar" className="button" />

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
    </>
  );
};

export default LoginScreen;
