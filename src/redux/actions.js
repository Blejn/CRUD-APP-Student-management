import * as types from "./actionType"
import axios from "axios";





const getUsers=(users)=>({
   type: types.GET_USERS,
   payload:users,
});
const userDeleted=()=>({
    type: types.DELETE_USER,

});
const userAdded=()=>({
    type: types.ADD_USER,
});
const gettedSingleUser=(user)=>({
    type: types.GET_SINGLE_USER,
    payload:user
})
const editedUser=()=>({

        type: types.EDIT_USER,
      
    })

export const loadUsers =()=>{
    return function (dispatch){
        axios
        .get("http://localhost:3500/user")
        .then((resp)=>{
            console.log("resp",resp)
            dispatch(getUsers(resp.data));
        })
        .catch((error)=> console.log(error));
    }

}
export const deleteUser =(id)=>{
    return function(dispatch){
        axios
        .delete(`http://localhost:3500/user/${id}`)
        .then((resp)=>{
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((error)=> console.log(error));

    }
}
export const addUser =(user)=>{
    return function(dispatch){
        axios
        .post(`http://localhost:3500/user/`,user)
        .then((resp)=>{
            dispatch(userAdded);
            dispatch(loadUsers);

        })
        .catch((error)=> console.log(error))
    }
}
export const getSingleUser=(id)=>{
    return function(dispatch){
        axios
        .get(`http://localhost:3500/user/${id}`)
        .then((resp)=>{
            console.log(resp)
            dispatch(gettedSingleUser(resp.data));
            dispatch(loadUsers);

        })
        .catch((error)=> console.log(error))
    }
}
export const editUser=(user,id)=>{
    return function(dispatch){
      axios
           .put(`http://localhost:3500/user/${id}`,user)
           .then((resp)=>{
            dispatch(editedUser());
            dispatch(loadUsers);
           })
           .catch((error)=> console.log(error))
    }
}