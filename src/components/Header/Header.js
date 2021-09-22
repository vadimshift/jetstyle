import './Header.css';
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип проекта" />
      <h1 className="header__title">JetStyle Book </h1>
    </header>
  );
}

export default Header;