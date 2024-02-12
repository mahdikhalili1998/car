import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../graphql/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cm({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, id },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      toast.success("Your comment is waiting for confirmation", {
        position: "top-center",
      });
      setName("");
      setEmail("");
      setText("");
    } else {
      toast.warn("Please fill in all inputs  ", {
        position: "top-center",
      });
    }
  };
  // console.log(data);
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        color: "#1976d2",
        padding: "2rem",
        borderRadius: "2rem",
      }}
    >
      <Grid xs={12} item>
        <Typography component={"p"} variant="h5">
          Send Your Comments
        </Typography>
      </Grid>
      <Grid xs={12} mt={2} mb={4} item>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: "2rem" }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: "2rem" }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Comment Text"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item>
        {loading ? (
          <Button
            sx={{ fontSize: "2rem" }}
            variant={"contained"}
            onClick={sendHandler}
            disabled
          >
            Sending ...
          </Button>
        ) : (
          <Button
            sx={{ fontSize: "2rem" }}
            variant={"contained"}
            onClick={sendHandler}
          >
            Send
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default Cm;
