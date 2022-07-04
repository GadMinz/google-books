import "./scss/App.scss";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
