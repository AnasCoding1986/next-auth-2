"use client";

import { POST } from "@/app/comments/route";

const RegisterPage = () => {

    const handleRegister = async(e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Welcome to registration");
        // Add your registration logic here
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            password: e.target.image.value,
            password: e.target.type.value,
        }

        const resp = await fetch('http://localhost:3000/api/auth/signup/newUser',{
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
                    <div>
                        <label>
                            <span>Image</span>
                        </label><br />
                        <input type="text" name='image' placeholder="Image url" className="input bg-slate-400 input-bordered" required />
                    </div>
                    <div>
                        <label>
                            <span>Type</span>
                        </label><br />
                        <select
                        className="input bg-slate-400 input-bordered"
                        name="type"
                        placeholder="user type"
                        >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="moderator">Moderator</option>
                        

                        </select>
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
