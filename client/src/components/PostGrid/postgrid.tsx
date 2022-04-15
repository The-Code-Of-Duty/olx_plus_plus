import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import PostCard from "../Post/post";
import "./Postgrid.scss";

export default function PostGrid() {
  return (
    <div style={{ width: "100%" }}>
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
    </div>
  );
}
