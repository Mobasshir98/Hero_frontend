import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({},{
    createCourseRequest:(state)=>{
        state.loading=true;
    },
    createCourseSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    createCourseFail:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    createAssignmentRequest:(state)=>{
        state.loading=true;
    },
    createAssignmentSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    createAssignmentFail:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null
    }
})