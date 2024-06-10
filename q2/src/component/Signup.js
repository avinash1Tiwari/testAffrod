import { useState } from "react";

import axios from "axios";

const SignUp = ()=>{


    const [formData,seFormData] = useState({firstname:"",lastname:"",email:"",password:""})


    async function submitHandler(){
        // console.log(formData)


        try{

            const response = await axios.post("localhost:3030/signup",{
                firstname : formData.firstname,
                lastname :formData.lastname,
                email:formData.email,
                password : formData.email
            })

            console.log(response.data)
        }
        catch(error)
        {
            console.log("error" + error)
        }
    }


    function handleName(e)
    {
        const currData = {...formData}
        currData.firstname = e.target.value;
        seFormData(currData)
    }


    function handlelastname(e)
    {
        const currData = {...formData}
        currData.lastname = e.target.value;
        seFormData(currData)
    }

    function handleEmail(e)
    {
        const currData = {...formData}
        currData.email = e.target.value;
        seFormData(currData)
    }


    function handlepassword(e)
    {
        const currData = {...formData}
        currData.password = e.target.value;
        seFormData(currData)
    }




    return(
        <div className="text-xl font-bold border border-black border-2xl p5 w-2/4 ml-80 pt-10 pb-10 bg-green-300 mb-20">
            <form action="" onSubmit={submitHandler}>
           <div className="mb-4">
           <label htmlFor="first">
        Firstname
            </label>
            <input type="text" id="first"
            className="border-xl ml-2 bg-inherit"
            placeholder="name"
            name="firstname"
            value={formData.firstname}
            onChange={handleName}/>
           </div>
           <div className="mb-4">
           <label htmlFor="first">
        Lastname
            </label>
            <input type="text" id="first"
            name="lastname"
            value={formData.lastname}  onChange={handlelastname}/>
           </div>
           <div className="mb-4">
           <label htmlFor="first">
       Email
            </label>
            <input type="text" id="first"
              name="email"
              value={formData.email}
              onChange={handleEmail}
            />
           </div>
           <div className="mb-4">
           <label htmlFor="first">
        Password
            </label>
            
            
            <input type="text" id="first"

                name="password"
                value={formData.password}
                onChange={handlepassword}
            />
           </div>

           <button onClick={submitHandler}>submit</button>

           </form>
        </div>
    )
}


export default SignUp