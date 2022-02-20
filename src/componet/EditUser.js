import React,{useState,useEffect} from 'react'
import {FormControl,FormGroup,InputLabel,Input,Button,makeStyles, Typography} from '@material-ui/core'
import { editUser, getUsers } from './service/api'
import {useNavigate,useParams} from 'react-router-dom'


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

function EditUser() {
  const navigate = useNavigate();
  const {id}=useParams();
  const classes=useStyle();
  const[user,setUser]=useState(initialValue)
  const{firstName,lastName,gender,phoneNumber}=user;

  useEffect(()=>
  {
      loadUserData();
  },[])

  const loadUserData=async()=>
  {
      const response= await getUsers(id);
      setUser(response.data);
  }

  const editUserDetails=async()=>
  {
    const response = await editUser(id, user);
      navigate('/all')    
  }

  const onValueChange=(e)=>
  {
    setUser({...user,[e.target.name]:e.target.value})
  }

  return (
    
    <FormGroup className={classes.container}>
      <Typography variant='h5'>Edit User</Typography>
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
      <Button variant='contained' color='primary' onClick={()=>editUserDetails()} style={{marginTop:'10px'}}>Edit User</Button>
    </FormGroup>
  )
}

export default EditUser  