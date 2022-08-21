import React, { useState } from 'react'
import {Button, Input,Stack,InputGroup,InputLeftElement,InputRightElement, InputLeftAddon } from '@chakra-ui/react'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {MdDriveFileRenameOutline} from 'react-icons/md'
import {Link} from'react-router-dom'
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addUser } from '../redux/actions'
const AddStudent = () => {
        let navigate = useNavigate(); 
        let dispatch = useDispatch();
const[error, setError]=useState("");
     // const {firstName,lastName,email,contact} = state;

    const [state,setState]= useState(
        { firstName:"",
        lastName:"",
        email:"",
        contact:"",
           
       
        });
        




   
        const handleInputChange =(e) =>{
          e.preventDefault();
          if(!state.firstName || !state.lastName || !state.email || !state.contact){
            setError("Please input all fields")
          }
        const value=e.target.value;
           setState(
            {
              ...state,
            [e.target.name]:value,
          
           })
          //  setState({...state,{firstName:firstName})
          }
        const handleSubmit=(e)=>{
          console.log(state);
            e.preventDefault();
            if(!state.firstName || !state.lastName || !state.email || !state.contact ){
              setError("Please input all fields");
            } else{
              dispatch(addUser(state));
              navigate.push("/")
              setError("");
            }
        };
        

  return (
    <>
    <h1>Add Student</h1>
    {error && <h2 style={{color:"red"}}>{error}</h2>}
<form autoComplete='off' noValidate onSubmit={handleSubmit}>
    <Stack marginTop={100} justifyContent={"center"} alignItems={"center"} spacing={4}>
  <InputGroup display={"inline"} maxWidth={400}>
    <InputLeftElement
    marginBottom={10}
      pointerEvents='none'
      children={<MdDriveFileRenameOutline/>}/>  
    
    <Input name="firstName"   onChange={handleInputChange} marginBottom={10} type='text' placeholder='First Name' value={state.firstName} />
  </InputGroup>


  <InputGroup display={"inline"} maxWidth={400}>
    <InputLeftElement
     marginBottom={10}
      pointerEvents='none'
      children={<MdDriveFileRenameOutline/>}
    
    />
    <Input name="lastName"   onChange={handleInputChange}  value={state.lastName}   marginBottom={10} type='text' placeholder='Last Name'  />

  </InputGroup>

 <InputGroup display={"inline"} maxWidth={400}>
        <InputLeftElement
         marginBottom={10}
      pointerEvents='none'
       children={<AiOutlineMail/>}

    />
    <Input name="email"  onChange={handleInputChange} value={state.email}  marginBottom={10} type='text' placeholder='Email' />
</InputGroup>

 <InputGroup display={"inline"} maxWidth={400}>
        <InputLeftElement
         marginBottom={10}
      pointerEvents='none'
       children={<AiOutlinePhone/>}
     
    />
    <Input name="contact"   onChange={handleInputChange} value={state.contact}  marginBottom={10} type='number' placeholder='Phone number' />

</InputGroup>


</Stack>
<div>
<Link to={"/"}>
 <Button type="submit"  variant='outline' colorScheme='blue' marginRight={4}>Back</Button>
</Link>

  <Button type="submit"  variant='outline' colorScheme='green' marginRight={4}>Add Student</Button>
 
 </div> 
    
    </form>
    
    </>
  )
}

export default AddStudent