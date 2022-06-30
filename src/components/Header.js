import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { click } from "@testing-library/user-event/dist/click";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { Menu } from "./pages/menu/Menu";

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: ${mainStyle.padding};
  button {
    border: none;
    background: none;
    width: 48px;
    height: 48px;
    svg {
      color: black;
      font-size: 22px;
    }
  }
`;

const Logo = styled.h1`
  font-family: "Noto Serif KR", serif;
  font-size: 22px;
  font-weight: 800;
  width: 120px;
  height: 34px;
  text-align: center;
  line-height: 1rem;
  a {
    color: black;
  }
  span {
    font-size: 10px;
    font-weight: 700;
    font-family: none;
  }
`;

export const Header = () => {
  // const btn = document.querySelector(".bar");
  // console.log(btn);
  // const handleClick = () => {
  //   btn.classList.toggle("");
  // };
  // btn.addEventListener("click", handleClick);

  return (
    <div>
      <SHeader>
        <Logo>
          <Link to="/">
            shim & lee <span>LAW OFFICE</span>
          </Link>
        </Logo>
        <button className="bar">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Menu />
      </SHeader>
    </div>
  );
};
