import logo from "./assets/the Bold tap logo.png";

function Header() {
  return (
    <header>
      <div id="headCont">
        <div className="logo">
          <img src={logo} alt="BoldTap" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div id="icon">
          <i className="fa fa-user"></i>
          <i className="fa fa-shopping-bag"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
