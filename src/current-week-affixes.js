import React, { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import axios from "axios";
import "./styles.css";

export const CurrentWeekAffixes = (props) => {
  const region = props.region ? props.region : "us";
  const [affixes, setAffixes] = useState({});

  useEffect(() => {
    const fetchAffixes = async () => {
      const { data } = await axios.get(
        `https://raider.io/api/v1/mythic-plus/affixes?region=${region}&locale=en`
      );

      setAffixes(data);
    };

    if (region) {
      fetchAffixes();
    }
  }, [region]);

  return (
    <Header className="current-week-affixes" as="h4">
      {affixes.title
        ? `Affixes this week: ${affixes.title}`
        : "Raider.io seems to be down right now. Please check back later."}
    </Header>
  );
};
