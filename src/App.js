import './App.css';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import MoviesList from './Pages/MoviesList';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
  
      <MoviesList />

      <Footer />
    </>
  );
}

export default App;
