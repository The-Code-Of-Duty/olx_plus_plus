import { useState } from "react";
import logo from "./logo.svg";
// import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import GoogleLoginComp from "./components/Google/googleLogin";
import Footer from "./components/Footer/footer";
import PostCard from "./components/Post/post";
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
