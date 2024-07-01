import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../shared/store/store";
import { Paths } from "./paths/Paths";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";
import { Footer } from "../widgets/footer/Footer";
import { Navbar } from "../widgets/navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Paths />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
