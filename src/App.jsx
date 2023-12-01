import { Content } from "./components/content/Content";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Header } from "./components/header/Header";
import { Contact } from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
