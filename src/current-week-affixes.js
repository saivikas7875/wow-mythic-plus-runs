import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./styles.scss";

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
    <Typography variant="h6">{`Affixes this week: ${affixes.title}`}</Typography>
  );
};
