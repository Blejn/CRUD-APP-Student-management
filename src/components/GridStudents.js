import React from 'react'
import { useDispatch } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,ButtonGroup
} from '@chakra-ui/react'
import { deleteUser } from '../redux/actions'



const GridStudents = ({users}) => {
const dispatch = useDispatch();

const deleteHandler=(id)=>{
if(window.confirm("You sure to delete?")){
   dispatch(deleteUser(id));
  }
}
  return (
    <>
   

<TableContainer>
  <Table size='md'>
    <Thead>
      <Tr>
        <Th>First name</Th>
        <Th>Last name</Th>
        <Th>email</Th>
         <Th>contact</Th>
          <Th>Edit/Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
       {users && users.map((user)=>(
      <Tr key={user.id}>
        <Td>{user.firstName}</Td>
        <Td>{user.lastName}</Td>
        <Td> {user.email}</Td>
         <Td> {user.contact}</Td>
          <Td >  <Button colorScheme='green' marginRight={4}>Edit</Button> <Button colorScheme='red' onClick={()=>deleteHandler(user.id)}>Delete</Button></Td>
      </Tr>
      ))};
    </Tbody>
 
  </Table>
</TableContainer>





</>
  )
}

export default GridStudents