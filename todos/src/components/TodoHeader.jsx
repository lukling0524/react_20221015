import styled from "styled-components";

function Totoheader() {
  const dateStr = new Date().toLocaleDateString("ko-KR", { dateStyle: "full" });

  return (
    <HeaderBlock>
      <DateText>{dateStr}</DateText>
      <CountText>완료 1/2</CountText>
      <Statusbar>
        <Percentage>50%</Percentage>
      </Statusbar>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  padding: 12px 10px;
  border-bottom: 1px solid #777;
`;

const DateText = styled.h2`
  font-size: 1.3rem;
  font-weight: 300;
`;

const CountText = styled.p`
  margin: 4px 0 10px;
  color: #999;
  font-size: 0.9rem;
  font-weight: 700;
`;

const Statusbar = styled.div`
  height: 16px;
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  line-height: 16px;
  background-color: #bbb;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main};
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Percentage = styled.span`
  position: relative;
  color: #fff;
  z-index: 100;
`;

export default Totoheader;
