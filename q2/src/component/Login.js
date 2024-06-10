import axios from "axios"
import { useState } from "react"

const Login = ()=>{


    const [formData,seFormData] = useState({email:"",password:""})

    
    async function submitHandler(){
        // console.log(formData)


        try{

            const response = await axios.post(`localhost:3030/users/${formData.email}/login`,{
                email:formData.email,
                password : formData.email
            },
        {
            headers:{
            Authorization:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTgwMTk0MjIsInVzZXJuYW1lIjoiYXZpbmFzaC4yMTI1Y3NpdDExNThAa2lldC5lZHUuY29tIiwicGFzc3dvcmQiOiJ0ZXN0In0.XLkZ4Njm3qr_akc-tOrJgiEoBim5eeO1F0dsTzeCh_A`
        }}
    )
        

            console.log(response.data)
        }
        catch(error)
        {
            console.log("error" + error)
        }
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



    return (
        <div className="text-xl font-bold border border-black border-2xl p5 w-2/4 ml-80 pt-10 pb-10 bg-green-300 mb-20">
            <form action="">

            <div className="">
           <label htmlFor="first">
       Email
            </label>
            <input type="text" id="first"
              name="email"
              value={formData.email}
              onChange={handleEmail}
            />
           </div>

           <div>
           <label htmlFor="first">
       Password
            </label>
            <input type="text" id="first"
              name="email"
              value={formData.password}
              onChange={handlepassword}
            />
           </div>


           <button onClick={submitHandler}>submit</button>

            </form>
        </div>
    )
}

export default Login