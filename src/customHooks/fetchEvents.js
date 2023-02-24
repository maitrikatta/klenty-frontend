import { useEffect } from "react";
function useFetchEvents() {
  useEffect(() => {
    console.log("custom hook ran");
  }, []);
}

export default useFetchEvents;
