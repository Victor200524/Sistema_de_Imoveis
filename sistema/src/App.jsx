import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Home from "./pages/Home";
import Imobi from "./pages/Imobi";
import Global from "./styles/Global";

function App() {
  return (
    <div>
      <Header/>
      <Imobi/>
      {/* <Banner/>
      <Home/> */}
      <Footer/>
      <Global/>
    </div>
  );
}

export default App;
