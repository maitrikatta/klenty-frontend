import { Box, Tooltip, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Email as EmailIcon, Delete } from "@mui/icons-material";
import authAxios from "../../Libs/authAxios";
const MyIconButton = styled(IconButton)({
  color: "primary.white",
  border: "1px solid gray",
  "&.MuiButton-root": {
    padding: "3px",
    minWidth: "auto",
  },
  "&.MuiButton-root:hover": {
    border: "1px solid rgba(255,255,255,0.8)",
    backgroundColor: "rgba(230, 230, 230,0.1)",
  },
});
function EventActions({ eventId }) {
  async function sendEmail() {
    const res = await authAxios.post("/events/send", { eventId: eventId });
  }
  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <Tooltip title="Send Email">
        <MyIconButton onClick={sendEmail} variant="outlined">
          <EmailIcon />
        </MyIconButton>
      </Tooltip>
      <Tooltip title="Delete Event">
        <MyIconButton variant="contained">
          <Delete />
        </MyIconButton>
      </Tooltip>
    </Box>
  );
}

export default EventActions;
