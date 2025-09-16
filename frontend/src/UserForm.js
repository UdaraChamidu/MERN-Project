import {
  Grid,
  Typography,
  Input,
  Button,
} from "@mui/material"; /* import MUI components*/
import { use, useState } from "react"; /* to create state variables */
import React from "react";
import { useEffect } from "react"; // to use useEffect hook

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] =
    useState(); /* to store the id value, setId function used to change the value of id */
  const [name, setName] = useState(""); /* to store the name value */

  useEffect(() => {
    if (!submitted) {
      // if submitted is false, then clear the form
      setId("");
      setName("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <Grid /* Grid system (MUI component) (like a html div*/
      container /* grid name = container*/
      spacing={2} /*  spacing = padding*/
      sx={{
        /* css style*/ backgroundColor: "#ffffff",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid
        item /* grid name = item*/
        xs={
          12
        } /* xs = extra small screen size (use the full width for the grid at that time) */
      >
        <Typography /* it is like a paragraph. here it is used as h1 tag.*/
          component={"h1"}
          sx={{
            color: "#000000",
          }}
        >
          Users Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        {" "}
        {/* different screen sizes */}
        <Typography
          component={"label"}
          htmlFor="id" /* to give html for label */
          sx={{
            color: "#000000",
            marginRight: "10px",
            fontSize: "15px",
            width: "50px",
            display: "block" /* not in a same row */,
          }}
        >
          ID
        </Typography>
        <Input /* it is like an input tag in html */
          id="id"
          type="number"
          name="id"
          placeholder="Enter your ID"
          sx={{
            width: "200px",
            marginBottom: "10px",
          }}
          value={id} /* to set the value of the input field (props will add)*/
          onChange={(e) =>
            setId(e.target.value)
          } /* what happen when i type in input field, it is a function, parameter = e, no return, it take the user typed value and sent to setId function and update the id */
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        {" "}
        {/* different screen sizes */}
        <Typography
          component={"label"}
          htmlFor="id" /* to give html for label */
          sx={{
            color: "#000000",
            marginRight: "10px",
            fontSize: "15px",
            width: "50px",
            display: "block" /* not in a same row */,
          }}
        >
          Name
        </Typography>
        <Input /* it is like an input tag in html */
          id="name"
          type="text"
          name="name"
          placeholder="Enter your Name"
          sx={{
            width: "200px",
            marginBottom: "10px",
          }}
          value={name} /* to set the value of the input field (props will add)*/
          onChange={(e) =>
            setName(e.target.value)
          } /* what happen when i type in input field, it is a function, parameter = e, no return */
        />
      </Grid>

      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#0f160fff",
          color: "#ffffff",
          marginTop: "10px",
          marginLeft: "20px",
          "&:hover": {
            /* /* when mouse comes on the button some changeshappen */
            opacity: "0.7" /* transparency */,
            backgroundColor: "#0f160fff",
          },
        }}
        onClick={() =>
          isEdit ? updateUser({ id, name }) : addUser({ id, name })
        } /* when click the button, call the addUser function (which is received as a prop) and send the id and name as an object */
      >
        {isEdit ? "Update User" : "Add User"}
      </Button>
    </Grid>
  );
};

export default UserForm;
