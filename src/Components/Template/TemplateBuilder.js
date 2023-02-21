import { Divider, Paper, Typography, Grid } from "@mui/material";
import Title from "../TextFields/Title";
import Details from "../TextFields/Details";
import WishType from "../TextFields/WishType";
import SubmitBtn from "./SubmitBtn";
import TemplateProvider from "../../Context/templateContext";
function TemplateBuilder() {
  return (
    <Paper sx={{ p: 2 }} square={true} elevation={8}>
      <Typography variant="h6" color="primary">
        Create Template
      </Typography>
      <Divider sx={{ mb: 2, mt: 2 }} />
      <TemplateProvider>
        <form>
          <Grid alignItems="start" container spacing={2}>
            <Grid item xs={12} md={6}>
              <Title />
            </Grid>
            <Grid item xs={12} md={6}>
              <WishType />
            </Grid>
            <Grid item xs={12} md={6}>
              <Details />
            </Grid>
            <Grid alignSelf="center" item xs={12} md={6}>
              <SubmitBtn />
            </Grid>
          </Grid>
        </form>
      </TemplateProvider>
    </Paper>
  );
}

export default TemplateBuilder;
