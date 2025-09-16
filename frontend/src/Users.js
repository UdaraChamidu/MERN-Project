import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { useState, useEffect } from "react"; // useState is a hook
import Axios from "axios"; // to make http requests

/* data handling part is doing in this page */
/* these users should be sent to userTable using props */
/* const users = [
    {id:1, name:"Udara"},
    {id:2, name:"John"},
    {id:3, name:"Jane"}
]; */

const Users = () => {
  const [users, setUsers] = useState([]); // because we need to use again
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false); // for update user
  const [selectedUser, setSelectedUser] = useState({}); // to store selected user details

  useEffect(() => {
    // useEffect is a hook, it runs when the component is rendered (like componentDidMount)
    getUsers(); // call the function to fill users
  }, []); // [] means it runs only once when the component is rendered

  // function to fill users (use calling axios)
  const getUsers = () => {
    Axios.get("http://localhost:5000/api/users") // get request to backend (to get all users) (this return a promis)
      .then((response) => {
        // response=output from API (array)
        // console.log(response.data.response); // print data directly
        setUsers(response.data?.response || []); // set data to users (if data not exists, then an empty array will return)
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const payload = { id: data.id, name: data.name }; // create payload
    Axios.post("http://localhost:5000/api/createuser", payload) // post request to backend (to add a user)

      .then(() => {
        getUsers(); // refresh users list
        setSubmitted(false); // to show success message in UserForm
        setIsEdit(false); // reset isEdit to false
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);
    const payload = { id: data.id, name: data.name };
    Axios.post("http://localhost:5000/api/updateuser", payload)
      .then(() => {
        getUsers(); // refresh users list
        setSubmitted(false); // to show success message in UserForm
        setIsEdit(false); // reset isEdit to false
        setSelectedUser({}); // clear selected user details
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  return (
    <>
      {" "}
      {/* React fragment, only one root should have. so <></> is used */}
      <UserForm
        addUser={addUser} // sending function as a prop to UserForm
        submitted={submitted} // sending submitted state as a prop to UserForm
        data={selectedUser} // sending selected user details as a prop to UserForm
        isEdit={isEdit} // sending isEdit state as a prop to UserForm
        updateUser={updateUser}
      />
      <UserTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
      />{" "}
      {/* users data is sent to UserTable using props, (rows is just a name). now i can access 'rows' in UserTable file */}
    </>
  );
};

export default Users;
