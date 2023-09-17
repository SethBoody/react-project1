import { errorUser, startUser, successUser } from "./userSlice"
import axios from "axios";

export const addUser = async (user , dispatch) => {
    dispatch(startUser ());

    try{

        const res = axios.post("http://localhost:5000/api/users" , user);

        dispatch(successUser(res.data));

    }catch(err){
        dispatch(errorUser())
    }
}