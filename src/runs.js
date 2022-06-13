import React from "react";
import { Table, Header } from "semantic-ui-react";
import { Footer } from "./footer";
import "./styles.css";

export const RunsTable = (props) => {
  if (!props.runs) return null;

  if (props.runs && props.runs.length === 0) {
    return (
      <div className="no-keys">
        <Header as="h4">
          You did not run any keys this week, you lazy bum
        </Header>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Table aria-label="simple table" compact striped inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="total">Dungeon</Table.HeaderCell>
            <Table.HeaderCell className="total" align="right">
              Key Level
            </Table.HeaderCell>
            <Table.HeaderCell className="total" align="right">
              Timed
            </Table.HeaderCell>
            <Table.HeaderCell className="total" align="right">
              Score
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.runs.map((run, index) => (
            <Table.Row key={index}>
              <Table.Cell component="th" scope="row">
                {run.dungeon}
              </Table.Cell>
              <Table.Cell align="right">{run.mythic_level}</Table.Cell>
              <Table.Cell align="right">
                {run.num_keystone_upgrades > 0
                  ? `Yes (+${run.num_keystone_upgrades})`
                  : "Boo .. no!"}
              </Table.Cell>
              <Table.Cell align="right">{run.score}</Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell colSpan={2} />
            <Table.Cell className="total" align="right" colSpan={1}>
              <Header as="h3">Total keys run this week:</Header>
            </Table.Cell>
            <Table.Cell className="total" align="right">
              <Header as="h3">{props.runs.length}</Header>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Footer />
    </React.Fragment>
  );
};
