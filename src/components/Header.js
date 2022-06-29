import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

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
  return (
    <div>
      <SHeader>
        <Logo>
          <Link to="/">
            shim & lee <span>LAW OFFICE</span>
          </Link>
        </Logo>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </SHeader>
    </div>
  );
};
