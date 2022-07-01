import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";
import { News } from "./News";

const Wrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 35.921px;
  width: 100%;
`;

const Con = styled.div`
  padding: 0 144px;
`;

const Title = styled.h1`
  font-size: 150px;
  font-weight: 500;
  line-height: 200px;
  color: black;
  &:first-child {
    color: rgba(255, 255, 255, 0.5);
    -webkit-text-stroke: 1px black;
    margin-bottom: 120px;
  }
`;

const Desc = styled.h3`
  width: 670px;
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
  line-height: 35px;
`;

export const Home = () => {
  return (
    <div>
      <Wrap>
        <Con>
          <Title>WE'RE JUST</Title>
          <Title>LAWYERS</Title>
          <Desc>
            심앤이 법률사무소는 최전성기의 변호사들로 구성된 성과 지향형
            로펌으로, 클라이언트에 최상의 법률 경험과 결과를 선사하는 전문가
            집단입니다.
          </Desc>
        </Con>
      </Wrap>
      <News />
    </div>
  );
};
