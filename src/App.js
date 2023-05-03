import styled from "styled-components"; 
import Logo from "./15b5330956c2fc81a.jpg";  //Logo 이름은 자율대로 사용하면 된다 . logos나 g만 써도됨 .
// styled-components 랑 차크라와는 차이가 있다 . 셋 다 좋은거니 써보도록! 교수님은 차크라 좋아하신다 하셨다! 
// 다음 주 까진 익숙해지는게 최종 목표
// 오류가 뜨면 구글링해서 찾아보는 습관 필요.
// npm install 시 npm restart 시켜주는 것이 좋음.
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
 // display: flex;
  justify-content: center;
`;

const GlobalNav = styled.div`

width: 1000px;
height: 80px;
background: blue;
display: flex;
justify-content: space-between;
color:white;
align-items:center;
`;

const SmallNav = styled.div`
  display: flex;
  justify-content: space-between;  //의외로 많이 사용함
  div{
    padding: 15px 0; //div간 간격 15px띄움

    cursor:pointer; //커서 올리면 마우스 커서모양이 변경됨

    &:hover{ // 커서에 div 내용을 올릴 시 빨간색으로 글자색이 변경
      color:red;
    }

  }
  `;

  const ContainerImage = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative; // 부모요소 relative설정완
  &::after{ //가상클래스 after
    content:"";
    position:absoulte ; //이걸쓰면 상단 부모에 relative설정필요
    top:0;
    left:0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.7); //안먹히는것같다 .... 
  }
  `;

  const MainImage = styled.img`
    width: 100%;
    height: 100&;
    object-fit: cover;
  `;

  const MainTitle = styled.div` //pretendard [맥북의 국룰폰트...]
  position:absolute;
  font-weight:900;
  font-size:90px;

  trasform: translate(-50% -50%); //중앙정렬의 국룰..!
  top: 50%;
  left: 50%;
  background: blue;                                                                              
  z-index : 99;
  `;

  const SubTitle=styled.div`
    font-size :48px;
    margin-top:20px;
    color:rgba(0,0,0,0.4);
  `;

  function App() {
  return (
    <Container>
      <GlobalNav>
        <div>KangElee</div>
        <img src={Logo} width="80px" alt="logo"/> 
          <SmallNav>
          <div> 업체소개  </div> 
          <div> 포트폴리오</div>
          <div> 사진</div>
          <div> 게시판</div>
          <div> 연락처</div>
          </SmallNav>
      </GlobalNav>
      <ContainerImage>
        <MainImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49gR59muG-ugdFW8mA0HJ54GB2_nmxgqqrKsi6g4&s" alt="noting to img"/>
        <MainTitle>
          <div>영진직업전문학교</div>
        </MainTitle>
        <SubTitle>영진의 기술력은 세계 제일</SubTitle>
      </ContainerImage>
    </Container>
  );
}

export default App;