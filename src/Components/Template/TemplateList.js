import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TemplateItems from "./TemplateItems";
import authAxios from "../../Libs/authAxios";
import { styled } from "@mui/material/styles";
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
  async function fetchList() {
    const { data } = await authAxios.get("/wish/template");
    setList(data.templates);
  }
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <Accordion sx={{ height: "100%" }} elevation={12}>
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
            <Typography align="center">
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
