import NavBar from "../components/NavBar";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header titulo="Home Page" subtitulo="Pagina de inicio" />
      <main>este es el contenido principal de main</main>
    </>
  );
};

export default HomePage;
