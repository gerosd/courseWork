import './App.css';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import IndexMain from "./pages/index/IndexMain.jsx";

function App() {

    return (
        <div className="App">
            <Header />
            <IndexMain />
            <Footer />
        </div>
    )
}

export default App
