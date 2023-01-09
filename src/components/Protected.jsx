import { Outlet,Navigate } from "react-router-dom";
const Protected = ({isAuth,isAdmin}) => {
    if(isAdmin){
        return (
            <>
            {isAdmin?<Outlet/>:<Navigate to='/' />}
            </>
        )
    }
    else{
        return(
            <>
            {isAuth?<Outlet/>:<Navigate to='/login' />}
            </>
        )
    }

 
    
}
export default Protected;