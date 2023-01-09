import { server } from "../store";
import axios from'axios'


export const createCourse = (formData) => async(dispatch)=>{
    try{
        dispatch({type:"createCourseRequest"});

        const {data} = await axios.post(`${server}/createCourse`,formData,{
            headers:{
                "Content-type":"multipart/form-data"
            },
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"createCourseSuccess",payload:data.message});

    }
    catch(err){
        dispatch({type:"createCourseFail",payload:err.response.data.message});

    }
}
export const createAssignment = (formData) => async(dispatch)=>{
    try{
        dispatch({type:"createAssignmentRequest"});

        const {data} = await axios.post(`${server}/createAssignment`,formData,{
            headers:{
                "Content-type":"application/json"
            },
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"createAssignmentSuccess",payload:data.message});

    }
    catch(err){
        dispatch({type:"createAssignmentFail",payload:err.response.data.message});

    }
}