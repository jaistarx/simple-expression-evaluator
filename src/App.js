import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function App() {
  const [expre, setExpre] = useState("");
  const [wrongexpre, setWrongExpre] = useState("");
  const [calc, setCalc] = useState(0);
  const [valid, setValid] = useState(false);
  function buttonClicked() {
    if (expre == "") {
      setValid(false);
      setWrongExpre("Enter a VALID expression!");
    } else {
      try {
        setCalc(eval(expre));
        setValid(true);
      } catch (e) {
        setWrongExpre(' " ' + e.message + ' " ' + ", Enter a VALID expression!");
        setValid(false);
        handleClickOpen();
      }
    }
    handleClickOpen();
  }
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Enter Any Expression</div>
        <div className="textbox">
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 5,
                width: "50ch",
                input: { color: "white", backgroundColor: "rgb(25, 27, 32)" },
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Expression"
              variant="filled"
              color="warning"
              onChange={(e) => setExpre(e.target.value)}
              focused
            />
          </Box>
        </div>
        <div className="button">
          <Button variant="outlined" onClick={() => buttonClicked()}>
            Submit
          </Button>
        </div>
      </header>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{valid && calc}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {!valid && wrongexpre}
            {valid && expre} {valid && "="} {valid && calc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
