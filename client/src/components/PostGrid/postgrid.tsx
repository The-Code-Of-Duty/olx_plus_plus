import * as React from "react";
import {useEffect} from "react";
import Box, { BoxProps } from "@mui/material/Box";
import PostCard from "../Post/post";
import Container from '@mui/material/Container';
import axios, { AxiosResponse } from "axios";
import "./Postgrid.scss";

export default function PostGrid({ data }:any) {
    
  return (
    <div style={{ width: "100%" }}>
      <Container>
      <div className="post">
        { data.map((post:any, index:any) => {
             return (
              <div className="post-card" key={index}>
                <a href={`/post/${post._id}`} style={{ textDecoration: "none" }}>
                 <PostCard address={post.address} date={post.date} price={post.price} description={post.description} image={post.image} name={post.name} />
                </a>
              </div>
             );
        })
      }
      </div>
      </Container>
    </div>
  );
}
