import { Paper, Grid } from "@mui/material";

function Calendar() {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          height: "100px",
        }}
        square={true}
        elevation={8}
      >
        Calendar
      </Paper>
    </Grid>
  );
}

export default Calendar;
