import { Paper, Typography } from "@mui/material";

function EventDisplay() {
  return (
    <Paper
      sx={{
        height: "100px",
      }}
      square={true}
      elevation={8}
    >
      <Typography>
        All events will be displayed here when calender changes
      </Typography>
    </Paper>
  );
}

export default EventDisplay;
