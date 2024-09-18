import "./index.css";
import Header from "./components/header/Header";
import SliderCards from "./components/sliderCards/SliderCards";
import { BrowserRouter as Router } from "react-router-dom";
import BasicCards from "./components/basicCards/BasicCards"

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Header />
        <SliderCards />
        <BasicCards />
      </div>
    </Router>
  );
}

export default App;
