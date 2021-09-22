import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {

  let componentList = [];

  let colorConfig = {
    bg: "gray",
    bgNum: "-100",
    primary: "blue",
    primaryNum: "-600",
    secondary: "white",
    secondaryNum: ""
  };

  componentList.push(<Header colorConfig={colorConfig}/>);
  componentList.push(<NavBar colorConfig={colorConfig}/>);

  return (
      componentList
  );
}

export default App;
