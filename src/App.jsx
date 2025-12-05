import Header from "./header.jsx";
import About from "./about.jsx";
import Features from "./features.jsx";
import Activities from "./activities.jsx";
// import Footer from './footer.jsx';
import Products from "./products.jsx";
import './assets/fontawesome/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Activities />
      {/* <Footer /> */}
      <Products />
    </div>
  );
}

export default App;
