import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

const steps = [
  {
    title: "Create Template",
    desc: "Wish type form field must be unqiue. Once template created, you can reuse it",
  },
  {
    title: "Create Event",
    desc: "Choose previously created template. Be hassle free!",
  },
  { title: "Calendar", desc: "Slide through month, to see upcoming events" },
  { title: "Manage events", desc: "Send email or delete event" },
];
function About() {
  const [currentStep, setCurrentStep] = useState(0);
  const [expand, setExpand] = useState(true);
  function handleNext() {
    setCurrentStep((prev) => prev + 1);
  }
  function handleBack() {
    setCurrentStep((prev) => prev - 1);
  }
  return (
    <Accordion
      elevation={8}
      sx={{ height: "100%" }}
      expanded={expand}
      onChange={() => setExpand(!expand)}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color="primary">Help & About</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stepper activeStep={currentStep} orientation="vertical">
          {steps.map((item, index) => {
            return (
              <Step key={index}>
                <StepLabel>{item.title}</StepLabel>
                <StepContent>
                  <Typography variant="body2">{item.desc}</Typography>
                  <Box sx={{ mb: 1 }}>
                    <Button
                      onClick={handleNext}
                      sx={{ mt: 2, mr: 2 }}
                      size="small"
                      variant="contained"
                      color="success"
                    >
                      Next
                    </Button>
                    <Button
                      onClick={handleBack}
                      sx={{ mt: 2 }}
                      size="small"
                      variant="outlined"
                      disabled={!currentStep || false}
                    >
                      Back
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            );
          })}
          <Step key="random">
            <StepLabel>About</StepLabel>
            <StepContent>
              <Typography variant="subtitle2">
                Your feedback matters. See the code on github.
                <br></br> Also you can hire me!
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Button
                  onClick={() => setCurrentStep(0)}
                  variant="contained"
                  size="small"
                  color="secondary"
                  sx={{ mt: 2, mr: 2 }}
                >
                  Reset
                </Button>
                <Button
                  href="mailto:ykakde3@gmail.com?subject=Regarding event manager project"
                  variant="outlined"
                  size="small"
                  sx={{ mt: 2, mr: 2 }}
                >
                  Mail Yogesh
                </Button>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
      </AccordionDetails>
    </Accordion>
  );
}

export default About;
