import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#43a047",
      },
      secondary: blue,
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add new book
        </Button>
        <Dialog
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a new book</DialogTitle>
          <DialogContent>
            <div>
              <TextField
                id="standard-multiline-flexible"
                label="New Book Name"
                multiline
                fullWidth
                name="newBookName"
                value={props.newBookName}
                onChange={props.change}
              />
              <TextField
                id="standard-multiline-flexible"
                label="New Book Description"
                multiline
                fullWidth
                name="newBookDescription"
                value={props.newBookDescription}
                onChange={props.change}
              />
            </div>
          </DialogContent>

          <DialogActions>
            <FormControlLabel
              control={
                <Checkbox
                  name="newBookRead"
                  type="Checkbox"
                  checked={props.newBookRead}
                  onChange={props.change}
                  color="primary"
                />
              }
              label="Book read?"
            />
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              name="newBookSend"
              value="Send"
              onClick={(event) => {
                props.change(event);
                handleClose();
              }}
              color="primary"
            >
              Add book
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
