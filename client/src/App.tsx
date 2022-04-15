import { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import Footer from "./components/Footer/footer";
import PostGrid from "./components/PostGrid/postgrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Category />
      <PostGrid />
      <Footer />
    </div>
  );
}

export default App;
