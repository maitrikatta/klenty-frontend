import { Grid } from "@mui/material";
import TemplateBuilder from "./TemplateBuilder";
import TemplateList from "./TemplateList";
function Template() {
  return (
    <Grid item direction="row" spacing={1} container>
      <Grid item xs={12} sm={6}>
        <TemplateBuilder />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TemplateList />
      </Grid>
    </Grid>
  );
}

export default Template;
