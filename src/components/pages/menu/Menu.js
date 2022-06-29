import { faArrowRightLong, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
  padding: 0 108px;
  display: flex;
  flex-direction: column;
`;

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 50px;
    font-weight: 800;
    &:hover {
      color: #007aff;
    }
    svg {
      /* display: none; */
    }
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  span {
    svg {
      display: none;
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
                ABOUT
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
              <span>
                PRACTICE
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
              <span>
                PROFESSIONALS
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
              <span>
                INSIGHT
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </MainMenu>
            <SubMenu>
              <span>
                상담 신청
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span>
                사무소 위치
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span>성범죄 피해 센터</span>
            </SubMenu>
          </Menus>
        </MenusWrap>
      </Bg>
    </Wrap>
  );
};
