import { useState, useContext } from "react";
import { AuthContext } from "./context/Authcontext.js";
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import Footer from "./components/Footer/footer";
import PostGrid from "./components/PostGrid/postgrid";

function App() {
  const { state } = useContext(AuthContext);
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
