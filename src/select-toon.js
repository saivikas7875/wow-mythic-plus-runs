import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  TextField,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  wrapper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around"
  }
}));

export const SelectToon = (props) => {
  const classes = useStyles();
  const [region, setRegion] = React.useState("us");
  const [realm, setRealm] = React.useState("");
  const [character, setCharacter] = React.useState("");

  const handleClick = () => {
    props.fetchRuns(region, realm, character);
  };

  return (
    <Paper classes={{ root: classes.paper }} elevation={3}>
      <div className={classes.wrapper}>
        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-simple-select-required-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className={classes.selectEmpty}
          >
            <MenuItem value={"us"}>US</MenuItem>
            <MenuItem value={"eu"}>EU</MenuItem>
          </Select>
        </FormControl>
        <FormControl required className={classes.formControl}>
          <TextField
            id="realm"
            value={realm}
            onChange={(e) => setRealm(e.target.value)}
            label="Realm"
            name="Realm"
            variant="outlined"
          />
        </FormControl>
        <FormControl required className={classes.formControl}>
          <TextField
            id="character"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            label="Character"
            name="Character"
            variant="outlined"
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Search
        </Button>
      </div>
    </Paper>
  );
};
