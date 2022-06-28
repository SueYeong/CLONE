import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div``;

const Bg = styled.div`
  height: 100vh;
  display: flex;
  justify-content: end;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Menus = styled.div`
  background-color: white;
`;

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = () => {
  return (
    <Wrap>
      <Bg>
        <Menus>
          <MainMenu>
            <span>
              ABOUT
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>
              PRACTICE
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>
              PROFESSIONALS
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>
              INSIGHT
              <FontAwesomeIcon icon={faPlus} />
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
      </Bg>
    </Wrap>
  );
};
