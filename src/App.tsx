
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar"; 

const App = () => {
  return (
    <div className="dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
  <Navbar />
  <Hero />
</div>

  );
};

export default App;
