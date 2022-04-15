import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PostCard() {
  return (
    <Card>
      {/* <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      /> */}
      <CardActions
        sx={{
          position: "absolute",
          zIndex: 2,
          margin: 0,
          paddingTop: 0,
          paddingRight: 3,
          paddingBottom: 3,
          paddingLeft: 0,
        }}
        disableSpacing
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <Card
        sx={{
          padding: 1,
          margin: 0,
          marginBottom: 0,
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardMedia
          sx={{ zIndex: 1 }}
          component="img"
          height="150"
          image="https://apollo-singapore.akamaized.net/v1/files/6troq7hzgkeb-IN/image;s=300x600;q=60"
          alt="Paella dish"
        />
      </Card>
      <CardContent
        sx={{
          margin: 0,
          paddingLeft: 1,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 1,
        }}
      >
        <Typography
          sx={{ fontSize: 24, fontWeight: 650 }}
          variant="h4"
          component="div"
        >
          $100000
        </Typography>
        <Typography color="text.secondary">Tata Nexon 1000</Typography>
      </CardContent>
      <div
        style={{
          marginBottom: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            padding: 1,
          }}
        >
          Location - Date
        </Typography>
      </div>
    </Card>
  );
}
