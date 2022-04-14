import MainPageRender from "./components/MainPage";

function App() {
    return (
        <div className={"bg-backgroundColor-dark h-screen overflow-x:hidden overflow-y:scroll"}>
            <MainPageRender key={"NavBar-Component"} />
        </div>
    );
}

export default App;
