import axios from "axios";
import {useEffect} from 'react';
import React, { useParams } from "react-router-dom";
import "./postDetails.css";
function PostDetails() {
  const { id } = useParams();
  let postdata;
  useEffect(() => {
     axios.get('http://localhost:8080/post/'+id).then((response) => {
       console.log(response);
     }).then((response) => {
       postdata = response;
     })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={
            "https://apollo-singapore.akamaized.net/v1/files/6troq7hzgkeb-IN/image;s=300x600;q=60"
          }
          alt=""
        />
      </div>{" "}
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; $100000 </p>
          <span>Iphone</span>
          <span>12th Feb</span>
        </div>
        <div className="productDescription">
          <p className="p-bold">Product Description</p>
          <p>lorem ipsum lorem ipsum</p>
        </div>

        <div className="contactDetails">
          <p className="p-bold">Seller details</p>
          <p>Name : PrithviRaj Chauhan</p>
          <p>Phone : 999738847</p>
        </div>
      </div>
    </div>
  );
}
export default PostDetails;
