import { Table, TableCell, TableContainer, TableHead, Paper, Button, TableRow, TableBody } from "@mui/material"; 

const UserTable = ({rows, selectedUser, deleteUser}) => {    /*  insted of typing type different props names like ({rows, ..., ..}), we can type (props) */
    return(
        <TableContainer
            component = {Paper}    /* this can be managed easily in different devices */
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>


                <TableBody>     {/* if you use (props) in the above function, you should use props.rows here */}
                    {
                        rows.length > 0 ? rows.map(row => (                                                         /* only data present, below things will work*/
                            <TableRow key={row.id} sx = {{'&:last-child td, &:last-child th' : {border: 0}}}>      {/* key is used to identify each row uniquely, and remove the border of the last row */}
                                <TableCell component ='th' scope = "row" >  {row.id}  </TableCell>                 {/* th means table header */}
                                <TableCell component ='th' scope = "row" >  {row.name}  </TableCell>               {/* th means table header */}
                                <TableCell> 
                                    <Button
                                        sx = {{ margin: '0px, 10px'}}
                                        onClick ={() =>{selectedUser({id: row.id, name: row.name})}}   /* when update button is clicked, the selected user details will be sent to Users.js */
                                    >
                                    Update 
                                    </Button> 

                                    <Button
                                        sx = {{ margin: '0px, 10px'}}
                                        onClick ={() => deleteUser({id: row.id})}   /* when delete button is clicked, the user id will be sent to Users.js */
                                    >
                                    Delete 
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )): (
                            <TableRow sx = {{'&:last-child td, &:last-child th' : {border: 0}}}>
                                <TableCell component ='th' scope = "row" >  No Users  </TableCell>          {/* if no users, this will be shown */}
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
