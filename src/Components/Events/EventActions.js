/*
  author:Yogesh kakde
  Note: contains email delete and send fetures.
  Date: 6-02-2023
*/
import { Box, Tooltip, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Email as EmailIcon,
  Delete,
  DoneAll as Done,
} from "@mui/icons-material";
import authAxios from "../../Libs/authAxios";
import { useEventContext } from "../../Context/EventsContext";
import { useState } from "react";
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
  const { setUpdateList } = useEventContext();
  const [send, setSend] = useState(false);
  async function sendEmail() {
    const { data } = await authAxios.post("/events/send", { eventId: eventId });
    console.log(data);
    setSend(true);
  }
  async function handleDelete() {
    const { data } = await authAxios.delete(`/events/upcoming/${eventId}`);
    if (!data.deletedCount === 1) alert("cant delete");
    setUpdateList((prev) => prev + 1);
    alert("Event Deleted");
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
        <MyIconButton disabled={send} onClick={sendEmail} variant="outlined">
          {send ? <Done color="success" /> : <EmailIcon />}
        </MyIconButton>
      </Tooltip>
      <Tooltip title="Delete Event">
        <MyIconButton onClick={handleDelete} variant="contained">
          <Delete />
        </MyIconButton>
      </Tooltip>
    </Box>
  );
}

export default EventActions;
