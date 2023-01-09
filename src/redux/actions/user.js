import { server } from "../store";
import axios from'axios'

export const login = (email,password) => async(dispatch)=>{
    try{
        dispatch({type:"loginRequest"});

        const {data} = await axios.post(`${server}/login`,{email,password},{
            headers:{
                "Content-type":"application/json"
            },
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"loginSuccess",payload:data});

    }
    catch(err){
        dispatch({type:"loginFail",payload:err.response.data.message});

    }
}

export const myProfile = () => async(dispatch)=>{
    try{
        dispatch({type:"loadUserRequest"});

        const {data} = await axios.get(`${server}/me`,{
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"loadUserSuccess",payload:data});

    }
    catch(err){
        dispatch({type:"loadUserFail",payload:err.response.data.message});

    }
}
export const logout = () => async(dispatch)=>{
    try{
        dispatch({type:"logoutRequest"});

        const {data} = await axios.post(`${server}/logout`,{
           withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"logoutSuccess",payload:data.message});

    }
    catch(err){
        dispatch({type:"logoutFail",payload:err.response.data.message});

    }
}
export const register = (registerData) => async(dispatch)=>{
    try{
        dispatch({type:"registerRequest"});

        const {data} = await axios.post(`${server}/register`,registerData,{
            headers:{
                "Content-type":"application/json"
            },
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"registerSuccess",payload:data});

    }
    catch(err){
        dispatch({type:"registerFail",payload:err.response.data.message});

    }
}