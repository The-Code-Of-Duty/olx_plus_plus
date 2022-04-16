import * as React from "react";
import {useEffect} from "react";
import Box, { BoxProps } from "@mui/material/Box";
import PostCard from "../Post/post";
import Container from '@mui/material/Container';
import axios, { AxiosResponse } from "axios";
import "./Postgrid.scss";

export default function PostGrid(data:any) {
  
  return (
    <div style={{ width: "100%" }}>
      <Container>
      <div className="post">
        <div className="post-card">
          <PostCard />
        </div>
        <div className="post-card">
          <PostCard />
        </div>
        <div className="post-card">
          <PostCard />
        </div>
        <div className="post-card">
          <PostCard />
        </div>
        <div className="post-card">
          <PostCard />
        </div>
      </div>
      </Container>
    </div>
  );
}
