import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TemplateItems from "./TemplateItems";
import { styled } from "@mui/material/styles";
import useFetchTemplates from "../../customHooks/fetchTemplates";

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
  const [list, setList] = useState([]);
  const [expand, setExpand] = React.useState(true);
  const data = useFetchTemplates();
  useEffect(() => {
    setList(data);
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
          {list.length === 0 ? (
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
              }}
              variant="subtitle1"
              textAlign="center"
            >
              Seems No Template Created Yet
            </Typography>
          ) : (
            <TemplateItems list={list} setList={setList} />
          )}
        </OverflowBox>
      </AccordionDetails>
    </Accordion>
  );
}

export default TemplateList;
