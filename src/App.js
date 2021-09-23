import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {

  let componentList = [];

  componentList.push(<Header key={"Header-Component"} />);
  componentList.push(<NavBar key={"NavBar-Component"} />);

  return (
      <div className={"bg-backgroundColor-dark h-screen overflow-x:hidden overflow-y:scroll"}>
        {componentList}
      </div>
  );
}

export default App;
