import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

function Random() {
  return (
    <Accordion sx={{ height: "100%" }}>
      <AccordionSummary>
        <Typography>Hi there </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa
        cum facilis suscipit dicta provident quibusdam natus commodi, eaque quas
        voluptate laboriosam! Dignissimos cum veritatis molestias vero sequi
        exercitationem eligendi voluptatibus minus doloribus aut, dolor ducimus
        perspiciatis quos eos? Facere nihil unde nemo qui molestias eos possimus
        alias inventore assumenda!
      </AccordionDetails>
    </Accordion>
  );
}

export default Random;
