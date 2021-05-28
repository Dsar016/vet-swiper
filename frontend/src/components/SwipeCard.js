import CardLocation from "./CardLocation";
import "./SwipeCard.css";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StyledRating from "@material-ui/lab/Rating";
import PetsIcon from "@material-ui/icons/Pets";
import TinderCard from "react-tinder-card";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

export default function SwipeCard(props) {
  const classes = useStyles();

  return (
    <div className="swipe-card-container">
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        style={{ width: "100%" }}
        className="swipe-card"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardLocation location={props.location} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.data["firstName"]} {props.data["lastName"]}
              </Typography>
              <StyledRating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<PetsIcon fontSize="inherit" />}
                readOnly
              />
              <Typography variant="body1" color="textSecondary" component="p">
                <div>Email: {props.data["email"]}</div>
                <div>Email: {props.data["email"]}</div>
                <div>Email: {props.data["email"]}</div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </TinderCard>
      <div className="swipe-card-button">
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<DoneIcon />}
          // onClick={() => swipe("left")}
        >
          Yeah
        </Button>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<CloseIcon />}
          // onClick={() => swipe("right")}
        >
          Naaa
        </Button>
      </div>
    </div>
  );
}
