import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TemplateItems from "./TemplateItems";
import { styled } from "@mui/material/styles";
import useFetchTemplates from "../../customHooks/fetchTemplates";
import { useTemplateContext } from "../../Context/templateContext";

const OverflowBox = styled(Box)({
  "&.MuiBox-root ": {
    "&::-webkit-scrollbar": {
      height: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(30deg, orange, yellow)",
      borderRadius: "3px 3px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.5)",
    },
  },
});
function TemplateList() {
  const { templateList, setTemplateList } = useTemplateContext();
  const [expand, setExpand] = React.useState(true);
  const data = useFetchTemplates();
  useEffect(() => {
    setTemplateList(data);
  }, [data]);
  return (
    <Accordion
      sx={{ height: "100%" }}
      expanded={expand}
      onChange={() => setExpand(!expand)}
      elevation={12}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="primary">Template List</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <OverflowBox
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            overflow: "auto",
            overflowY: "hidden",
            scrollbarWidth: "thin",
            pb: 3,
          }}
        >
          {data?.length === 0 ? (
            <EmptyList />
          ) : (
            <TemplateItems list={templateList} setList={setTemplateList} />
          )}
        </OverflowBox>
      </AccordionDetails>
    </Accordion>
  );
}

function EmptyList() {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.text.secondary,
      }}
      variant="subtitle1"
      textAlign="center"
    >
      Seems No Template Created Yet
    </Typography>
  );
}
function LoadingMessage() {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.text.secondary,
      }}
      variant="subtitle1"
      textAlign="center"
    >
      Loading Template List...
    </Typography>
  );
}
export default TemplateList;
