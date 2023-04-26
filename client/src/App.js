//import logo from './logo.svg';
import './App.css';
import SideBar from "./Components/SideBar";
import PageContent from "./Components/PageContent";
import AppHeader from "./Components/AppHeader";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className ="Side-barandpage-content" >
        <SideBar></SideBar>
        <PageContent></PageContent>
     
      </div>
    </div>
  );
}

export default App;
