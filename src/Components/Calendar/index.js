import { Grid } from "@mui/material";
import Calendar from "./Calendar";
import About from "./About";
function Index() {
  return (
    <Grid item spacing={1} container>
      <Grid item xs={12} md={6}>
        <Calendar />
      </Grid>
      <Grid item xs={12} md={6}>
        <About />
      </Grid>
    </Grid>
  );
}

export default Index;
