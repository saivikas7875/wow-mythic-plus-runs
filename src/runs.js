import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import "./styles.css";

export const RunsTable = (props) => {
  if (!props.runs) return null;

  if (props.runs && props.runs.length === 0) {
    return (
      <div className="no-keys">
        <Typography variant="h4">
          You did not run any keys this week, you lazy bum
        </Typography>
      </div>
    );
  }

  return (
    <TableContainer component={Container}>
      <Table aria-label="simple table" size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className="total">Dungeon</TableCell>
            <TableCell className="total" align="right">
              Key Level
            </TableCell>
            <TableCell className="total" align="right">
              Timed
            </TableCell>
            <TableCell className="total" align="right">
              Score
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.runs.map((run, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {run.dungeon}
              </TableCell>
              <TableCell align="right">{run.mythic_level}</TableCell>
              <TableCell align="right">
                {run.num_keystone_upgrades > 0
                  ? `Yes (+${run.num_keystone_upgrades})`
                  : "Boo .. no!"}
              </TableCell>
              <TableCell align="right">{run.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow>
          <TableCell colSpan={2} />
          <TableCell className="total" align="right" colSpan={1}>
            Total keys run this week:
          </TableCell>
          <TableCell className="total" align="right">
            {props.runs.length}
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};
