import './App.css'
import './assets/scss/header.scss';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Main from "./pages/index/main/Main.jsx";

function App() {

    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
