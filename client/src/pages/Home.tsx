import {useEffect} from "react";
import Category from "../components/Category/Category"
import PostGrid from "../components/PostGrid/postgrid"
import axios, { AxiosResponse } from "axios";
export default function Home() {
  let data;
  useEffect(() =>{
     axios.get('http://localhost:8080/').then((response: AxiosResponse) =>{
       console.log(response);
     }).then((res) =>{
          data=res;
     })
  })
  return (
    <div className="home">
       <Category />
       <PostGrid data={data} />
    </div>
  )
}
