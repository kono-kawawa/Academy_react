import styled from "styled-components"

//0515 내용들---------------------------------------------- 
const Container=styled.div`
    width : 100%;
    height : 100vh;
    background : rgba(0,0,0,0.2);
    display : flex;
    justify-content : center; 
    padding : 64px 0; 
`;

const InnerContainer = styled.div`
    width : 1000px;
    height : 200px;
`;

 const GridContainer=styled.div` 
     place-items: center; 
     display : grid;
     gap : 10px;
     grid-template-columns: 1fr 1fr 1fr;
 `; 

 const MainBox = styled.div`
     background:white;
     width: 80%;
     height: 500px;
     border-radius: 20px 0px 20px 20px;
     &:hover{
        background:red;
     }  
     
 `;
 
 const BoxTitle = styled.h1`
    
 `

//0515 내용들 끝----------------------------------------------

export default function Profile(){
    return(//중앙정렬 시킬 div 생성 0515
        <Container>  
            {/* 1000픽셀 중앙정렬 */}
            <InnerContainer>
                {/* 그리드 */}                                                      
                <GridContainer>         
                {/*박스*/}
                    <MainBox></MainBox>
                    <MainBox></MainBox>
                    <MainBox></MainBox> 
                </GridContainer>
            </InnerContainer>
        </Container> 
    )
}
//display:flex; - 가로로 플렉스 컨테이너를 생성
//justify center : 배치 상황을 중앙으로 집결시킴