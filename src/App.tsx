import "./App.css";
import Decks from "./Decks";
import "./index.css";
import logo from "/img/logo.png";

function App() {
  return (
    <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg mx-auto min-h-screen flex flex-col bg-gradient-to-bl from-amber-100 to-pink-300">
      <header>
        <div className="container mx-auto p-4 flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              width="150px"
              alt="Logo"
              className="h-8 w-auto mr-4"
            />
          </a>
        </div>
      </header>
      <Decks />
    </div>
  );
}

export default App;
