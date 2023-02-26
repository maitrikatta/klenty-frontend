import React from "react";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Title from "../TextFields/Title";
import Details from "../TextFields/Details";
import WishType from "../TextFields/WishType";
import SubmitBtn from "./SubmitBtn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function TemplateBuilder() {
  const [expand, setExpand] = React.useState(true);
  return (
    <Accordion
      expanded={expand}
      sx={{ height: "100%" }}
      onChange={() => setExpand(!expand)}
      elevation={12}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="primary">Create Template</Typography>
      </AccordionSummary>
      <AccordionDetails>
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
            <Grid alignSelf="end" item xs={12} md={6}>
              <SubmitBtn />
            </Grid>
          </Grid>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default TemplateBuilder;
