import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => (
    <BrowserRouter>
        <Header className="header" />

        <Main className="main" />

        <Footer className="footer" />
    </BrowserRouter>
)

export default App
