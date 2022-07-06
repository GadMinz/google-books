import "./scss/App.scss";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Book from "./pages/Book";
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/search" element={<Main />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
