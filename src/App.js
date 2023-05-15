import { GlobalStyles } from "./styles";
import Header from "./Header";
import MainImage from "./MainImage";
import Profile from "./profile";
import Portfolio from "./portpolio";

function App() {
  return ( 
    <> 
      {/* css 리셋 */}                 
                                                          
      <GlobalStyles />
      {/* 메뉴 */}                   
      <Header />

      {/* 메인이미지 
      profile추가*/}
      <MainImage />
      <Profile/>   
      <Portfolio/>

    </>
  );
}

export default App;
