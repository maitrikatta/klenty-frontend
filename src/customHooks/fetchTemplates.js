/*
  Consumer components:
    TextFields > WishType.js
    TextFields > EventBuilder > Template.js
    Template > TemplateList.js

*/
import { useEffect, useState } from "react";
import authAxios from "../Libs/authAxios";
function useFetchTemplates() {
  const [state, setState] = useState([]);
  useEffect(() => {
    async function makeRequest() {
      const {
        data: { templates },
      } = await authAxios.get("/wish/template");
      if (templates.length > 0) setState(templates);
      else setState(null);
    }
    makeRequest();
  }, []);
  return state;
}

export default useFetchTemplates;
