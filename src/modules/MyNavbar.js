import "../visual/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../visual/images/logo.png";

function MyNavbar() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark px-5 py-2 main-nav myNav">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse w-100">
          <ul class="nav navbar-nav w-100">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                БРИЛЛИАНТЫ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                EXCLUSIVE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                АУКЦИОНЫ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                БОКСЫ
              </a>
            </li>
          </ul>
        </div>
        <a class="navbar-brand order-first order-md-0 mx-0" href="#">
          <img src={logo} className="logo mb-1" alt="My logo" />
        </a>
        <div class="collapse navbar-collapse w-100">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                RU
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ПОИСК
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ВОЙТИ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
