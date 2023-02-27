import authAxios from "../../Libs/authAxios";
import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTemplateContext } from "../../Context/templateContext";
import LoadingButton from "@mui/lab/LoadingButton";
function validateData(state) {
  const title = state?.title.trim();
  const wishType = state?.wishType.trim();
  const details = state?.details.trim();
  if (title === "" || title === null) {
    return { titleError: true, errorMsg: "Found empty title" };
  } else if (title.length < 3) {
    return { titleError: true, errorMsg: "length must be 3 or more" };
  } else if (wishType === "" || wishType === null) {
    return { wishTypeError: true, errorMsg: "Found empty wish type" };
  } else if (wishType.length < 3) {
    return { wishTypeError: true, errorMsg: "Flength must be 3 or more" };
  } else if (details === "" || details === null) {
    return { detailsError: true, errorMsg: "Found empty details" };
  } else {
    return 1;
  }
}
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
function SubmitBtn() {
  const { state, setState, setTemplateList } = useTemplateContext();
  const clearForm = () => {
    setState(defaultState);
  };
  const sendData = async () => {
    // show spinner in button and disable untill res/err returns
    setState({ ...state, isLoading: true });
    try {
      var {
        data: { data },
      } = await authAxios.post("/wish/template", {
        title: state.title,
        wishType: state.wishType,
        detail: state.details,
      });

      if (data) {
        // cancle loading
        setState({ ...state, isLoading: false });

        // update template list to reflex ui changes
        setTemplateList((prevList) => [...prevList, data]);

        // set state to default
        clearForm();
      }
    } catch (error) {
      setState({ ...state, isLoading: false });
      alert(error?.response?.data?.msg);
    }
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const res = validateData(state);
    if (typeof res === "object") {
      // override error data
      setState({ ...state, ...res });
    } else {
      // OK, send data to back end
      sendData();
    }
  };
  return (
    <Box>
      <LoadingButton
        onClick={(ev) => handleSubmit(ev)}
        type="submit"
        fullWidth
        color="success"
        variant="contained"
        loadingPosition="end"
        endIcon={<SendIcon />}
        loading={state.isLoading ? true : false}
      >
        <span> create</span>
      </LoadingButton>
    </Box>
  );
}

export default SubmitBtn;
