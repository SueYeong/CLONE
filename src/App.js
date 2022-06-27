import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Menu } from "./components/pages/menu/Menu";
import { NotFound } from "./components/pages/NotFound";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
