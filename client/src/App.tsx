import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import Footer from "./components/Footer/footer";
import PostGrid from "./components/PostGrid/postgrid";
import Home from "./pages/Home"

function App() {

  const [user,setUser] = useState({
    name:'',
    email:'',
    profileUrl:''
  })

  useEffect(() => {
    const userName=localStorage.getItem("userName");
    const userEmail=localStorage.getItem("userEmail");
    const userProfile=localStorage.getItem("userProfile");

    if(userName!=null && userEmail!=null && userProfile!=null)
      setUser({...user,name:userName,email:userEmail,profileUrl:userProfile});
  },[]);
  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar userData={user} />
        <Switch> 
          <Route path="/" component={Home} exact/>
        </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
