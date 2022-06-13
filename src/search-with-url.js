import React, { useState } from "react";
import { Form, Card, Header } from "semantic-ui-react";
import "./styles.css";

export const SearchWithURL = (props) => {
  const [isError, toggleError] = useState(false);
  const handleChange = async (e) => {
    toggleError(false);
    const url = e.target.value;

    if (isValidRaiderIOURL(url)) {
      const urlAsObject = new URL(url);
      const paths = getSplitPaths(urlAsObject.pathname);
      props.fetchRuns(paths[1], paths[2], paths[3]);
    } else {
      toggleError(true);
    }
  };

  const getSplitPaths = (pathname) =>
    pathname.split("/").filter((value) => value);

  const validatePath = (pathname) => {
    const paths = getSplitPaths(pathname);

    return paths[0] === "characters" && paths.length === 4;
  };

  const isValidRaiderIOURL = (value) => {
    if (value) {
      const url = new URL(value);

      return url.host === "raider.io" && validatePath(url.pathname);
    }

    return false;
  };

  return (
    <Card fluid raised>
      <Card.Content>
        <Header as="h3">Search with Raider.io URL</Header>
      </Card.Content>
      <Card.Content>
        <Form>
          <Form.Input
            error={isError}
            required
            fluid
            placeholder="Paste raider.io profile"
            onChange={handleChange}
          />
        </Form>
      </Card.Content>
    </Card>
  );
};
