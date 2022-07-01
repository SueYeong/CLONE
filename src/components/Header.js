import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: ${mainStyle.padding};
`;

const Btn = styled.div`
  border: none;
  background: none;
  width: 48px;
  height: 48px;
  svg {
    color: black;
    font-size: 22px;
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

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.leftresult};
`;

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;
  background-color: rgba(0, 0, 0, 0.4);
`;

const MenusWrap = styled.div`
  width: 827.203px;
  background-color: white;
  position: relative;
  top: 0;
  left: ${(props) => props.leftresult};
  transition: 1s;
`;

const Menus = styled.div`
  height: 100vh;
  padding: 0 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 50px;
    display: flex;
    svg {
      margin-left: 80px;
      opacity: 0.5;
      transform: rotateZ(-45deg);
      transition: 0.8s;
    }
    &:hover {
      color: #007aff;
      display: flex;
      svg {
        width: 40px;
        display: flex;
        transform: rotateZ(-45deg) translate(10px, -10px);
        opacity: 1;
      }
    }
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  font-size: 20px;
  font-weight: 600;
  span:last-child {
    color: #59089e;
    svg {
      margin-left: 30px;
      font-weight: 300;
    }
  }
`;

const move = keyframes`
0%{
  transform: rotateZ(0);
}
100%{
  transform: rotateZ(90deg);
}
`;

const SubMenus = styled.div`
  margin-bottom: 50px;
  span {
    font-size: 20px;
    font-weight: 600;
    margin-top: 50px;
  }
  svg {
    margin-left: 25px;
    font-weight: 300;
  }
  &:hover {
    color: #007aff;
    svg {
      animation: ${move} 0.5s;
    }
    &:nth-child(3) svg {
      animation: none;
    }
  }
`;

export const Header = () => {
  const [left, setLeft] = useState("100%");

  return (
    <div>
      <SHeader>
        <Logo>
          <Link to="/">
            shim & lee <span>LAW OFFICE</span>
          </Link>
        </Logo>
        <Btn onClick={() => setLeft(0)}>
          <FontAwesomeIcon icon={faBars} />
        </Btn>
        <Wrap leftresult={left} onClick={() => setLeft("100%")}>
          <Bg>
            <MenusWrap leftresult={left} onClick={() => setLeft("100%")}>
              <Menus>
                <MainMenu>
                  <span>
                    <p>ABOUT</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                  <span>
                    <p>PRACTICE</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                  <span>
                    <p>PROFESSIONALS</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                  <span>
                    <p>INSIGHT</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </MainMenu>
                <SubMenu>
                  <SubMenus>
                    <span>상담 신청</span>
                    <FontAwesomeIcon icon={faPlus} />
                  </SubMenus>
                  <SubMenus>
                    <span>사무소 위치</span>
                    <FontAwesomeIcon icon={faPlus} />
                  </SubMenus>

                  <span>
                    성범죄 피해 센터
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </SubMenu>
              </Menus>
            </MenusWrap>
          </Bg>
        </Wrap>
      </SHeader>
    </div>
  );
};
