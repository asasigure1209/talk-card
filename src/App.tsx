import "./App.css";
import LogoHeader from "./components/LogoHeader";
import Decks from "./Decks";
import "./index.css";

function App() {
  return (
    <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg mx-auto min-h-screen flex flex-col bg-gradient-to-bl from-amber-100 to-pink-300">
      <LogoHeader />
      <Decks />
    </div>
  );
}

export default App;
