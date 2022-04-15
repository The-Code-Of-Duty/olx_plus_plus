import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import "./post.scss";


export default function PostCard({location='', date='', price='', description='', image=''}) {
  return (
    <Card>
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
          image={image}
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
        <div className="card-flex">
        <Typography
          sx={{ fontSize: 24, fontWeight: 650 }}
          variant="h4"
          component="div"
        >
          {price}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </div>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
      <div
        style={{
          marginBottom: 0,
        }}
        className="post-foot"
      >
        <div className="location">
          {location}
        </div>
        <div className="date">{date}</div>
      </div>
    </Card>
  );
}
