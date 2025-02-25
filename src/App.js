import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Navigation from "./components/Navigation";

const App = () => {
    const Click = () => {
        alert('Hello, World!');
    };
    return (
        <>
            <Navigation />
            <Container>
                <h1><p align="center">Hello, World!</p></h1>
                <Button text={"Hello, World!"} onClick={Click} />
            </Container>
        </>
    );
};

export default App;