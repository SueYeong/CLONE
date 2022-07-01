import styled from "styled-components";

const Wrap = styled.div``;

const Title = styled.div``;

const Container = styled.div``;

const Bg = styled.div``;

const Con = styled.div``;

export const News = () => {
  return (
    <div>
      <Wrap>
        <Title>NEWS</Title>
        <Container>
          <Bg></Bg>
          <Con>
            <h6>칼럼</h6>
            <h3>성범죄 피해자 국선변호사가 도움이 되지 않는 이유</h3>
            <p>
              성범죄 피해자는 무료로 국선변호사를 지원받을 수 있습니다. 그래서
              나도 변호사가 있다고 착각하기 쉬운데, 사실 피해자 국선변호사는
              막상 별 도움이 되지 않습니다. 실제로 사건을 진행해보신 피해자분들,
              특히 내 국선변호사와 전화 통화 한 번을 하기가 어려웠던 경험이
              있으신 분들은 더욱 공감이 될 것입니다. 물론 성범죄 피해자들을 위해
              열심히 일하시는 국선변호사님들도 많이 계시지만, 현실적인 여건
              때문에 많은 피해자들이 제대로 된 도움을 받지 못하고 있는 것이
              현실입니다.
            </p>
            <p>2022.06.30</p>
          </Con>
        </Container>
      </Wrap>
    </div>
  );
};
