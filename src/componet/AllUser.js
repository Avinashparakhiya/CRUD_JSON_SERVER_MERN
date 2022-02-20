import React,{useEffect,useState} from 'react';
import { getUsers,delateUse } from './service/api';
import {Table,TableCell,TableBody,TableRow,TableHead, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function AllUser() {
  const[users,setUsers]=useState([])

    useEffect(()=>
    {
      getAllUser();
    },[])

    const getAllUser= async()=>
    {
       const response= await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }

    const delateUser=async(id)=>
    {
await delateUse(id)
getAllUser();
    }


  return (
    <div>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell>Id</TableCell>
               <TableCell>First Name</TableCell>
               <TableCell>Last Name</TableCell>
               <TableCell>Gender</TableCell>
               <TableCell>Phone Number </TableCell>
               <TableCell>Actions </TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {
               users.map(user=>(
                 <TableRow>
                   <TableCell>{user.id}</TableCell>
                   <TableCell>{user.firstName}</TableCell>
                   <TableCell>{user.lastName}</TableCell>
                   <TableCell>{user.gender}</TableCell>
                   <TableCell>{user.phoneNumber}</TableCell>
                   <TableCell>
                     <Button variant='contained' color='primary' style={{marginRight:'10px'}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                     <Button variant='contained' color='secondary' onClick={()=>delateUser(user.id)}>Delate</Button>
                   </TableCell>
                 </TableRow>
               ))
             }
           </TableBody>
         </Table>
    </div>
  )
}

export default AllUser