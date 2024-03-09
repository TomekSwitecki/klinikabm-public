import logo from "../../resources/LOGOTYPE.svg";
export function Header() {
  return (
    <header className="header">
      <div className="header__logotype">
        <img className="logotype_img" src={logo} alt="Klinika BM Logo" />
        <p className="logotype__text">
          <span className="logotype__text--klinika">klinika</span>
          <span className="logotype__text--bm">bm</span>
        </p>
      </div>
    </header>
  );
}
