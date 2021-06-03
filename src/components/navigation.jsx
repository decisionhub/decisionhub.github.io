import styled from "styled-components";
const ScrollBar = styled.img`
  height: 60px;
  padding: 0px;
  margin-top: -20px;
`;
export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <ScrollBar
              src="img/dh_logo_full.png"
              alt="Decision Hub Logo"
            ></ScrollBar>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function addEventListenerList(list, event, fn) {
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

const navItems = document.getElementsByClassName("page-scroll");
addEventListenerList(navItems, "click", hideMenu);

function hideMenu() {
  alert("1");
  document.getElementById("nav-trigger").checked = false;
}
