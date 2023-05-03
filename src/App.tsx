import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import SiteFooter from "./components/Footer/SiteFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <SiteFooter />
    </div>
  );
}

export default App;
