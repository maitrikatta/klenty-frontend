import Calendar from "./Calendar";
import Template from "./Template/Template";
import Events from "./Events/Events";
import { Grid } from "@mui/material";
import EventProvider from "../Context/EventsContext";
function Wrapper() {
  return (
    <Grid container spacing={2}>
      <Template />
      <EventProvider>
        <Calendar />
        <Events />
      </EventProvider>
    </Grid>
  );
}

export default Wrapper;
