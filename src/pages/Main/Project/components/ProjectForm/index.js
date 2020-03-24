import React from "react";
import { openProjectForm } from "../../../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "@material-ui/core";
import CreateProjectForm from "./FormikForm";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.reduce.createProjectForm);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(openProjectForm(false))}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
      >
        <CreateProjectForm />
      </Dialog>
    </div>
  );
};

export default ProjectForm;

//   useEffect(() => {
//     console.log(open)
// }, []);

//const [open, setOpen] = React.useState(false);

// const handleClickOpen = useMemo(
//   () => dispatch(openProjectForm(true)),
//   []
// );

// const handleClickOpen = useCallback(
//   () => dispatch(openProjectForm(true)), [
//   open
// ]);

// const handleClose = () => {
//   setOpen(false);
// };
