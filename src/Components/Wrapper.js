import Calendar from "./Calendar";
import Template from "./Template";
import Events from "./Events/";
import { Grid } from "@mui/material";
import EventProvider from "../Context/EventsContext";
import TemplateProvider from "../Context/templateContext";
function Wrapper() {
  return (
    <Grid container spacing={1}>
      <TemplateProvider>
        <Template />
      </TemplateProvider>
      <EventProvider>
        <Calendar />
        <Events />
      </EventProvider>
    </Grid>
  );
}

export default Wrapper;
