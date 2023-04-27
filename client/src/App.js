//import logo from './logo.svg';
import './App.css';
import SideBar from "./Components/SideBar";
import PageContent from "./Components/PageContent";
import AppHeader from "./Components/AppHeader";
function App() {
  return (
    <>
      <div className="App">
        <AppHeader />
        <div className="Side-barandpage-content" >
          <div style={{ width: '15%' }}> <SideBar></SideBar></div>
          <div className="content" style={{ width: "100%" }}><PageContent></PageContent></div>

        </div>
      </div>
    </>
  );
}

export default App;
