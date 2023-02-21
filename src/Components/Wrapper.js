import Calendar from "./Calendar/Calendar";
import Template from "./Template/Template";
import Events from "./Events/Events";
import { Grid } from "@mui/material";
function Wrapper() {
  return (
    <Grid container spacing={2}>
      <Template />
      <Calendar />
      <Events />
    </Grid>
  );
}

export default Wrapper;
