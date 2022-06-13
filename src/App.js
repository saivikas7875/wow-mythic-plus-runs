import React, { useState } from "react";
import { NavBar } from "./header";
import { SelectToon } from "./select-toon";
import { Container, Loader, Header } from "semantic-ui-react";
import { RunsTable } from "./runs";
import { CurrentWeekAffixes } from "./current-week-affixes";
import "./styles.css";
import axios from "axios";

export const App = () => {
  const [runs, setRuns] = useState(null);
  const [showProgress, toggleProgress] = useState(false);
  const [error, showError] = useState("");

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
      console.log(e);
      showError(e.response.data.message);
    } finally {
      toggleProgress(false);
    }
  }

  console.log(error);

  const showData = () => {
    if (showProgress) {
      return <Loader />;
    } else if (error) {
      return (
        <Header className="current-week-affixes" as="h3">
          {error}
        </Header>
      );
    }

    return <RunsTable runs={runs} />;
  };

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <SelectToon fetchRuns={fetchRuns} />
        <CurrentWeekAffixes />
        {showData()}
      </Container>
    </React.Fragment>
  );
};
