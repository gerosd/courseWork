import './App.css'
import './assets/scss/header.scss';
import Header from "./components/header/Header.jsx";
import Main from "./pages/index/main/Main.jsx";

function App() {

    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    )
}

export default App
