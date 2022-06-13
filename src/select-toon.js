import React from "react";
import { Form, Button, Card, Header, Container } from "semantic-ui-react";
import "./styles.css";

const Regions = [
  { key: "us", text: "US", value: "us" },
  { key: "eu", text: "EU", value: "eu" },
  { key: "tw", text: "TW", value: "tw" },
  { key: "kr", text: "KR", value: "kr" },
  { key: "cn", text: "CN", value: "cn" }
];

export const SelectToon = (props) => {
  const [region, setRegion] = React.useState("us");
  const [realm, setRealm] = React.useState("");
  const [character, setCharacter] = React.useState("");
  const [isLoading, toggleLoader] = React.useState(false);

  const curateRealm = (realm) => realm.replace("'", "");
  const handleClick = async () => {
    try {
      toggleLoader(true);
      await props.fetchRuns(region, curateRealm(realm), character);
    } finally {
      toggleLoader(false);
    }
  };

  const isButtonDisabled = () => {
    return realm === "" || character === "";
  };

  return (
    <Card fluid raised>
      <Card.Content>
        <Header as="h3">Select Character</Header>
      </Card.Content>
      <Card.Content>
        <Form loading={isLoading}>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Region"
              options={Regions}
              placeholder="Select Region"
              value={region}
              onChange={(_e, { value }) => setRegion(value)}
            />
            <Form.Input
              required
              fluid
              label="Realm"
              onChange={(e) => setRealm(e.target.value)}
            />
            <Form.Input
              required
              fluid
              label="Character name"
              onChange={(e) => setCharacter(e.target.value)}
            />
          </Form.Group>
          <Container textAlign="center">
            <Button
              color="teal"
              onClick={handleClick}
              size="large"
              disabled={isButtonDisabled()}
            >
              Search
            </Button>
          </Container>
        </Form>
      </Card.Content>
    </Card>
  );
};
