import React, { Fragment, useState, useContext } from "react";
import upload from "../../utils/upload.png";
import "./createpost.css";
const CreatePost = () => {
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [address, setAddress] = useState("");

  let [image, setImage] = useState();
    const handleSubmit = (e:any) => {
      e.preventDefault();
      const email = localStorage.getItem("email");
      const date = new Date();
        const body = {
          "email": email, 
          "name": name,
          "image": image,  
          "category": category,
          "address": address,   
          "date": date,
          "price": price,
          "description": description,
            
        }
        const response = fetch('http://localhost:8080/post', { 
          method: 'POST',
          mode: 'no-cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).then((response)=>{
          console.log(response);
        })
    };
  return (
    <Fragment>
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Category:</label>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        >
          {" "}
          <option>Select Category</option>
          <option value="Cars">Cars</option>
          <option value="Cameras & Lenses">Cameras & Lenses</option>
          <option value="Computers & Laptops">Computers & Laptops</option>
          <option value="Mobile Phones">Mobile Phones</option>
          <option value="Motorcycles">Motorcycles</option>
          <option value="Tablets">Tablets</option>
        </select>
        <br />
        <label>Price</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <label>Address</label>
        <br />
        <input
          className="input"
          type="text"
          name="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br />

        <br />
        <img
          alt="Post"
          width="200px"
          height="150px"
          src={image ? URL.createObjectURL(image) : upload}
        ></img>

        <br />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" type="submit">
          upload and Submit
        </button>
        </form>
      </div>
    </Fragment>
  );
};

export default CreatePost;
