import { Grid } from "@mui/material";
import EventBuilder from "./EventBuilder";
import EventDisplay from "./EventDisplay";

function Events() {
  return (
    <Grid item spacing={2} container>
      <Grid item xs={12} md={6}>
        <EventDisplay />
      </Grid>
      <Grid item xs={12} md={6}>
        <EventBuilder />
      </Grid>
    </Grid>
  );
}

export default Events;
