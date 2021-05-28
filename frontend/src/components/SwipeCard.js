import CardLocation from "./CardLocation";
import "./SwipeCard.css";
import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
});

export default function SwipeCard(props) {
  console.log(props);
  const classes = useStyles();
  console.log(props.location);
  console.log("!!!!!" + JSON.stringify(props.data));
  return (
    <div className="swipe-card-container">
      <Card className={classes.root}>
        <CardActionArea>
          <CardLocation location={props.location} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data["firstName"]} {props.data["lastName"]}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              <div>Email: {props.data["email"]}</div>
              <div>Email: {props.data["email"]}</div>
              <div>Email: {props.data["email"]}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className="swipe-card-button">
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<DoneIcon />}
        >
          Yeah
        </Button>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<CloseIcon />}
        >
          Naaa
        </Button>
      </div>
    </div>
  );
}
