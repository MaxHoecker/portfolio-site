import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {

  let componentList = [];

  componentList.push(<Header/>);
  componentList.push(<NavBar/>);

  return (
      componentList
  );
}

export default App;
