import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const { signInWithGoogle,setUser} =useAuth();
    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from||"/home";
    
    const handleSignInWithGoogle =()=>{
        signInWithGoogle()
        .then((res)=>
        {
            setUser(res.user);
            history.push(url);
        
        }

            )
        .catch((err)=>console.log(err));
    };

    return (
        <div>
           
            <div className=" container ">
                
                <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    
                    <div className="col-md-6 shadow p-5 bg-primary">
                         
                    
                        
                        <div className="from-group  mt-5">
                    
                            <button onClick={handleSignInWithGoogle} className="btn btn-secondary" >Google Sign in</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;