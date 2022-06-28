import { faPluse } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Wrap = styled.div``;

const Bg = styled.div``;

const Menus = styled.div``;

const MainMenu = styled.div``;

const SubMenu = styled.div``;

export const Menu = () => {
  return (
    <Wrap>
      <Bg>
        <Menus>
          <MainMenu>
            <span>ABOUT</span>
            <span>PRACTICE</span>
            <span>PROFESSIONALS</span>
            <span>INSIGHT</span>
          </MainMenu>
          <SubMenu>
            <span>상담 신청</span>
            <span>사무소 위치</span>
            <span>성범죄 피해 센터</span>
          </SubMenu>
        </Menus>
      </Bg>
    </Wrap>
  );
};
