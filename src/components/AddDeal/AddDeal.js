import React from 'react';
import { useForm } from "react-hook-form";

const AddDeal = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
       
        fetch("https://ghastly-spirit-92297.herokuapp.com/addDeal",{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(res=>res.json)
        .then(result=>console.log(result));
           reset();
        console.log(data);
    };
    return (
        
        
        <div >
            <h1 className="mt-5 text-center text-primary">Please Add today's deals</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" className="p-1 m-2 w-100"/>
                            <br />
                            
                            
                            <input {...register("duration")} className="p-1 m-2 w-100" placeholder="duration" />
                            <br />
                            <input type="number" className="p-1 m-2 w-100" {...register("price")} placeholder="price" />
                            <br />
                            <input {...register("img")} className="p-1 m-2 w-100" placeholder="img-url" />

                            
                            
                            
                            <br />

                            {/* {errors.exampleRequired && <span>This field is required</span>} */}

                            <input type="submit" value="Add" className="btn btn-primary w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDeal;