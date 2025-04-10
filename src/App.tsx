import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

const App = () => {
  return (
    <div className="dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Products/>
    </div>
  );
};

// https://github.com/Sohail-crypto-collab/Comforty-Store-Hackathon-Update

export default App;