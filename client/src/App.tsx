import { useState } from "react";
import logo from "./logo.svg";
// import './App.css'
import GoogleLoginComp from "./components/Google/googleLogin";
import Footer from "./components/Footer/footer";
import PostCard from "./components/Post/post";
import PostGrid from "./components/PostGrid/postgrid";
import PostDetails from "./components/PostDetails/postDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PostGrid />
      <Footer />
    </div>
  );
}

export default App;
