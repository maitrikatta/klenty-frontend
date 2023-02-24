import { Box, Typography } from "@mui/material";
import moment from "moment";
function DateAndEmail({ email, eventTime }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} component={"span"}>
      <Typography
        textTransform="lowercase"
        component={"span"}
        variant="subtitle2"
      >
        {email}
      </Typography>
      <Typography component={"span"} variant="caption">
        {moment(eventTime).format("Do MMM ddd - h : m A")}
      </Typography>
    </Box>
  );
}

export default DateAndEmail;
