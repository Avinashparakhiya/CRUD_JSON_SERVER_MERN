import React,{useState} from 'react'
import {FormControl,FormGroup,InputLabel,Input,Button,makeStyles, Typography} from '@material-ui/core'
import { addUser } from './service/api'
import {useNavigate} from 'react-router-dom'

const useStyle=makeStyles({
  container:{
    width:"50%",
    margin:'5% 0% 0% 25%'
  }
})

const initialValue={
  firstName:'',
  lastName:'',
  gender:'',
  phoneNumber:''
}

function AddUser() {
  const navigate = useNavigate();
  const classes=useStyle();
  const[user,setUser]=useState(initialValue)
  const{firstName,lastName,gender,phoneNumber}=user;
  const onValueChange=(e)=>
  {
    setUser({...user,[e.target.name]:e.target.value})
   
  }

  const addUSerDetails=async()=>
  {
      await addUser(user);
      navigate('/all')  
      
  }

  return (
    
    <FormGroup className={classes.container}>
      <Typography variant='h5'>Add User</Typography>
      <FormControl>
        <InputLabel>FirstName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='firstName' value={firstName}/>
      </FormControl>
      <FormControl>
        <InputLabel>LastName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='lastName' value={lastName}/>
      </FormControl>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='gender' value={gender}/>
      </FormControl>
      <FormControl>
        <InputLabel>PhoneNumber</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phoneNumber' value={phoneNumber}/>
      </FormControl>
      <Button variant='contained' color='primary' onClick={()=>addUSerDetails()} style={{marginTop:'10px'}}>Add User</Button>
    </FormGroup>
  )
}

export default AddUser  