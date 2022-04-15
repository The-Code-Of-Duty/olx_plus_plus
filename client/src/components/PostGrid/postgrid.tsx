import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import PostCard from "../Post/post";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function PostGrid() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          columnGap: 0,
          rowGap: 1,
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <PostCard />
        <PostCard />

        <PostCard />

        <PostCard />

        <PostCard />

        <PostCard />

        <PostCard />
        <PostCard />
        <PostCard />
      </Box>
    </div>
  );
}
