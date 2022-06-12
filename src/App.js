import React, { useState } from "react";
import { NavBar } from "./header";
import { SelectToon } from "./select-toon";
import { Typography, Container, LinearProgress } from "@material-ui/core";
import { RunsTable } from "./runs";
import { CurrentWeekAffixes } from "./current-week-affixes";
import "./styles.css";
import axios from "axios";

export const App = () => {
  const [runs, setRuns] = useState(null);
  const [showProgress, toggleProgress] = useState(false);

  async function fetchRuns(region, realm, name) {
    toggleProgress(true);

    try {
      const {
        data: { mythic_plus_weekly_highest_level_runs: keys }
      } = await axios.get(
        `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_weekly_highest_level_runs`
      );

      setRuns(keys);
    } catch (e) {
    } finally {
      toggleProgress(false);
    }
  }

  return (
    <div>
      <NavBar />
      <Container
        classes={{
          root: "select-toon-wrapper"
        }}
      >
        <Typography variant="h6">Select Character</Typography>
        <SelectToon fetchRuns={fetchRuns} />
        <CurrentWeekAffixes />
      </Container>
      {showProgress ? <LinearProgress /> : <RunsTable runs={runs} />}
    </div>
  );
};
