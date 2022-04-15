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
  //   const handleSubmit = () => {
  //     let date = new Date().toDateString();
  //     Firebase.storage()
  //       .ref(`/image/${image.name}`)
  //       .put(image)
  //       .then(({ ref }) => {
  //         ref.getDownloadURL().then((url) => {
  //           Firebase.firestore()
  //             .collection("products")
  //             .add({
  //               name,
  //               category,
  //               price,
  //               description,
  //               url,
  //               userId: user.uid,
  //               createdAt: date,
  //             })
  //             .then(() => {
  //               history.push("/");
  //             });
  //         });
  //       });
  //   };
  return (
    <Fragment>
      <div className="centerDiv">
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
        <button className="uploadBtn" onClick={() => {}}>
          upload and Submit
        </button>
      </div>
    </Fragment>
  );
};

export default CreatePost;
