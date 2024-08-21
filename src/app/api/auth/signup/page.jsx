"use client";

import { POST } from "@/app/comments/route";

const RegisterPage = () => {

    const handleRegister = async(e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Welcome to registration");
        // Add your registration logic here
        const newUser = {
            name: e.target.name.value,
            name: e.target.email.value,
            name: e.target.password.value,
        }

        const resp = await fetch('http://localhost:3000/api/auth/signup',{
            method: 'POST',
            body: JSON.stringify(newUser),
            headers:{
                'contetnt-type': 'application/json'
            }
        })

        console.log(resp);
        

    }


    return (
        <div className="text-center h-screen py-3">

            <h1 className="text-2xl font-semibold py-5">Sign up Here</h1>


            <div className="flex justify-center items-center">

                <form onSubmit={handleRegister}>
                    <div>
                        <label>
                            <span>Name</span>
                        </label><br />
                        <input type="text" name='name' placeholder="Name" className="input bg-slate-400 input-bordered" required />
                    </div>
                    <div>
                        <label>
                            <span>Email</span>
                        </label><br />
                        <input type="email" name='email' placeholder="email" className="input bg-slate-400 input-bordered" required />
                    </div>
                    <div>
                        <label>
                            <span>Password</span>
                        </label><br />
                        <input type="password" name='password' placeholder="password" className="input bg-slate-400 input-bordered" required />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="p-3 rounded-md bg-cyan-600 text-white font-semibold">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
