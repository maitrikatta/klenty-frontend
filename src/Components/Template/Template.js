import { Grid } from "@mui/material";
import TemplateBuilder from "./TemplateBuilder";
import TemplateList from "./TemplateList";
function Template() {
  return (
    <Grid item direction="row" alignItems="stretch" spacing={2} container>
      <Grid item sx={{ height: "auto" }} xs={12} sm={6}>
        <TemplateBuilder />
      </Grid>
      <Grid item sx={{ height: "auto" }} xs={12} sm={6}>
        <TemplateList />
      </Grid>
    </Grid>
  );
}

export default Template;
