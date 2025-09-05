import UserForm from "./UserForm";
import UserTable from "./UserTable";

/* data handling part is doing in this page */
/* these users should be sent to userTable using props */
const users = [
    {id:1, name:"Udara"},
    {id:2, name:"John"},
    {id:3, name:"Jane"}
];

const Users = () => {
    return(
        <>                  {/* React fragment, only one root should have. so <></> is used */}
            <UserForm />
            <UserTable rows={users} />    {/* users data is sent to UserTable using props, (rows is just a name). now i can access 'rows' in UserTable file */}
        </>
    )
}

export default Users;

