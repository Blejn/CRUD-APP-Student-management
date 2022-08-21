import { Container,Flex,TableContainer,Grid,Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import GridStudents from './GridStudents'
import{ useDispatch,useSelector} from 'react-redux';
import { loadUsers } from '../redux/actions';
import {Link,useNavigate} from 'react-router-dom'
const Home = () => {
  let navigate =useNavigate();
   let dispatch = useDispatch();
  const{users} = useSelector(state => state.data)

   useEffect(()=>{
dispatch(loadUsers())
},[])
  return (

    <div>
<h1>STUDENT MANAGEMENTS!</h1>
<Container maxHeight={"100vh"}  maxWidth={"100vw"} marginTop={10} marginBottom={10}>
<GridStudents users={users}  />
</Container>
<Link to="/add">
 <Button  variant='outline' colorScheme='blue' marginRight={4}>Add Student</Button>
</Link>


    </div>
  )
}

export default Home