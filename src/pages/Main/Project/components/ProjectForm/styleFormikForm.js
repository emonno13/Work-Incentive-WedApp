import { TextField, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const CssTextField = withStyles({
  root: {
    background: "#ffffff",
    "& label.Mui-focused": {
      color: "primary"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "primary"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(111, 111, 111, 0.2)"
      },
      "&:hover fieldset": {
        borderColor: "blue"
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary"
      }
    }
  }
})(TextField);
export const CssAutocomplete = withStyles({
  root: {
    background: "#ffffff",
    "& label.Mui-focused": {
      color: "primary"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "primary"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(111, 111, 111, 0.2)"
      },
      "&:hover fieldset": {
        borderColor: "blue"
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary"
      }
    }
  }
})(Autocomplete);

export default makeStyles((theme) => ({
  rootPaper: {
    padding: "20px 15px",
    background: "#f8f8f8"
  },
  projectTitle: {
    opacity: 0.5,
    fontSize: 30
  },
  rootFileUpload: {
    height: 76,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    background: "rgba(74, 74, 74, 0.1)"
  },
  fileUploadButton: {
    background: "#4a4a4a",
    height: 46,
    width: "100%",
    borderRadius: 4,
    padding: 5,
    "&:hover": {
      backgroundColor: "blue",
      opacity: 0.5,
      cursor: "pointer"
    }
  },
  fileUploadButtonText: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 0.88
  },
  fileUploadDetail: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  fileUploadDetailText: {
    fontSize: 14,
    color: "#6f6f6f",
    lineHeight: 1.64
  },
  groupFileUploaded: {
    //maxHeight: 400,
    //background: "pink",
    marginVertical: 10
  },
  actions: {
    //marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  removeAllButton: {
    marginTop: 2,
    background: "rgba(192,192,192,0.3)",
    height: 46,
    width: "100%",
    borderRadius: 4,
    padding: 5
  },
  removeAllButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6f6f6f",
    lineHeight: 1.64
  },
  createButton: {
    background: "#33a0f7",
    width: "100%",
    "&:hover": {
      backgroundColor: "blue",
      opacity: 0.5,
      cursor: "pointer"
    }
  },
  createButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 500
  },
  cancelButton: {
    background: "red",
    width: "100%",
    "&:hover": {
      backgroundColor: "blue",
      opacity: 0.5,
      cursor: "pointer"
    }
  }
}));
