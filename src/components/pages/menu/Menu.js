import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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

export const Menu = () => {
  return (
    <Wrap>
      <Bg>
        <MenusWrap>
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
  );
};
