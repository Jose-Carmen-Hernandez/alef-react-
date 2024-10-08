import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola. Bienvenidos a mi tienda!!!" />
    </>
  );
}

export default App;
