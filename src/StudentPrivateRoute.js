import React, {useState,useEffect} from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';
import MasterLayout from './layouts/student/MasterLayout';
import swal from 'sweetalert';

function StudentPrivateRoute({...rest}) {

    const history = useHistory();

    const [Authenticated, setAuthenticated] = useState(true);
    const [loading, setloading] = useState(false);

    // useEffect(() => {

    //     axios.get(`/api/checkingAuthenticated`).then(res=> {
    //         if(res.status === 200)
    //         {
    //             setAuthenticated(true);
    //         }
    //         setloading(false);
    //     });

    //     return () => {
    //         setAuthenticated(true);
    //     };
    // }, []);

    // axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    //     if(err.response.status === 401)
    //     {
    //         swal("Unauthorized",err.response.data.message,"warning");
    //         history.push('/');
    //     }
    //     return Promise.reject(err);
    // });

    // axios.interceptors.response.use(function (response) {
    //         return response;
    //     }, function (error) {
    //         if(error.response.status === 403) // Access Denied
    //         {
    //             swal("Forbidden",error.response.data.message,"warning");
    //             history.push('/403');
    //         }
    //         else if(error.response.status === 404) //Page Not Found
    //         {
    //             swal("404 Error","Url/Page Not Found","warning");
    //             history.push('/404');
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    if(loading)
    {
        return <h1>Loading...</h1>
    }

    return (

        <Route {...rest}
            render={ ({props, location}) => 
                Authenticated ?
                ( <MasterLayout {...props} /> ) :
                ( <Redirect to={{pathname: "/student-login", state: {from: location} }} /> ) 
            }
        />

    );
}

export default StudentPrivateRoute;
