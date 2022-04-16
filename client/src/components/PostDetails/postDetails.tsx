import axios from "axios";
import { useEffect } from "react";
import React, { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./postDetails.css";
import { useState } from "react";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
function PostDetails() {
  const [postdata, setpostdata] = useState([]);
  const history = useHistory();

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get("http://localhost:8080/post/" + id).then((response) => {
      // console.log(response);
      setpostdata(response.data);
    });
  }, []);

  console.log("postdata", postdata);

  const { address, email, date, description, image, name, price, category } =
    postdata;

  const handleSubmit = () => {
    history.push("/profile");
  };

  return (
    <>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={image} alt="" />
        </div>{" "}
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {price} </p>
            <span>{name}</span>
            <span>{date}</span>
          </div>
          <div className="productDescription">
            <p className="p-bold">Product Description</p>
            <p>{description}</p>
          </div>

          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : {email}</p>
            <p>Address: {address}</p>
          </div>
          <div>
            <Button
              onClick={handleSubmit}
              sx={{ width: "100%", padding: "7px", marginTop: "10px" }}
              variant="contained"
              endIcon={<LocalMallIcon />}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostDetails;
