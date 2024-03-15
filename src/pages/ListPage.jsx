import ListaUsuarios from "../components/ListaUsuarios";
import NavBar from "../components/NavBar";

const ListPage = () => {
  const listaUsuarios = [
    
  ];

  const saludar = () => {
    console.log("Hola mundo");
  };

  const mouseover = () => {
    console.log("Pasaste por encima de la etiqueta");
  };

  return (
    <>
      <NavBar />
      <div className="text-center">
        <p></p>
        <main className="row">
          <div className="col">
            <img
              src="/imagen/barra3.jpg"
              alt="Mariscos"
            />
            <div className="text-center">
              <h1>Sobre Nosotros</h1>
              <p>Somos una empresa mexicana dedicada a la alta cocina, nuestra calidad de alimentos nos coloca en el rankin de los mejores restaurantes de México..</p>
            </div>
            <ListaUsuarios listaUsuarios={listaUsuarios} />
          </div>
        </main>
      </div>
      <div className="text-center">
        <p></p>
        <main className="row">
          <div className="col">
            <div className="col">
              <h3>Reservaciones</h3>
              <input type="text" placeholder="Nombre"></input><br></br>
              <input type="text" placeholder="Apellido"></input><br></br>
              <input type="text" placeholder="Tel"></input><br></br>
              <input type="text" placeholder="email"></input><br></br>
              <input type="text" placeholder="Fecha"></input><br></br>
              <input type="text" placeholder="Hora"></input><br></br>
              <input type="text" placeholder="Comentario"></input><br></br>
              <input type="submit" placeholder="enviar"></input>
            </div>
            <ListaUsuarios listaUsuarios={listaUsuarios} />
          </div>
        </main>
      </div>
    </>
  );
};

export default ListPage;
