import React, { useState, useContext } from "react";
const TemplateContext = React.createContext();
const defaultState = {
  title: "",
  details: "",
  wishType: "",
  titleError: false,
  wishTypeError: false,
  detailsError: false,
  errorMsg: "",
  isLoading: false,
};
export default function TemplateProvider({ children }) {
  const [state, setState] = useState(defaultState);
  const [templateList, setTemplateList] = useState([]);
  return (
    <TemplateContext.Provider
      value={{ templateList, setTemplateList, state, setState }}
    >
      {children}
    </TemplateContext.Provider>
  );
}
export function useTemplateContext() {
  return useContext(TemplateContext);
}
