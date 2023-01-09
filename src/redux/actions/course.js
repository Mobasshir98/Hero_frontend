import { server } from "../store";
import axios from'axios'


export const getCourses = (search="") => async(dispatch)=>{
    try{
        dispatch({type:"allCourseRequest"});

        const {data} = await axios.get(`${server}/courses?search=${search}`,{
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"allCourseSuccess",payload:data.courses});

    }
    catch(err){
        dispatch({type:"allCourseFail",payload:err.response.data.message});

    }
}
export const addCourse = (title) => async(dispatch)=>{
    try{
        dispatch({type:"addCourseRequest"});

        const {data} = await axios.post(`${server}/addCourse`,{title},{
            headers:{
                'Content-type':'application/json'
            },
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"addCourseSuccess",payload:data.message});

    }
    catch(err){
        dispatch({type:"addCourseFail",payload:err.response.data.message});

    }
}

export const removeCourse = (title) => async(dispatch)=>{
    try{
        dispatch({type:"removeCourseRequest"});

        const {data} = await axios.delete(`${server}/removeCourse?title=${title}`,{
            withCredentials:true,
        })
        // console.log(data)
        dispatch({type:"removeCourseSuccess",payload:data.message});

    }
    catch(err){
        dispatch({type:"removeCourseFail",payload:err.response.data.message});

    }
}