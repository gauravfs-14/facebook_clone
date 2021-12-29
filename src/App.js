import styled from "styled-components";
import LeftSideBar from "./components/LeftSideBar";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import RightSidbar from "./components/RightSidbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppStyled>
        <LeftSideBar />
        <MainContent />
        <RightSidbar />
      </AppStyled>
    </div>
  );
}

export default App;

const AppStyled = styled.div`
  margin-top: 55px;
  padding-top: 25px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: space-between;
`;
