import React from "react";
import {
  Box,
  Divider,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import EventActions from "./EventActions";
import DateAndEmail from "./DateAndEmail";
function RenderEventList({ eventList }) {
  return (
    <>
      {eventList?.map((eventItem) => {
        const {
          _id,
          eventTime,
          recipientEmail,
          template: { wishType },
        } = eventItem;
        return (
          <Box key={_id} component="span">
            <Divider variant="inset" sx={{ mr: 2 }} component="li" />
            <ListItem secondaryAction={<EventActions eventId={_id} />}>
              <ListItemAvatar>
                <Avatar>{wishType[0].toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                }}
                primary={wishType.substr(0, 20).toLowerCase()}
                secondary={
                  <DateAndEmail eventTime={eventTime} email={recipientEmail} />
                }
              />
            </ListItem>
          </Box>
        );
      })}
    </>
  );
}

export default RenderEventList;
