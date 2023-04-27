//import logo from './logo.svg';
import './App.css';
import SideBar from "./Components/SideBar";
import PageContent from "./Components/PageContent";
import AppHeader from "./Components/AppHeader";
import background from './backgroundweather2.jpg'
function App() {
  return (
    <>
      <div className="App">
        {/* <AppHeader /> */}
        <div className="Side-barandpage-content" >
          <div style={{ width: '15%' }}> <SideBar></SideBar></div>
          <div  style={{ width: "100%", backgroundImage: `url(${background})` }}><PageContent></PageContent></div>

        </div>
      </div>
    </>
  );
}

export default App;
