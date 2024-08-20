"use client";

const RegisterPage = () => {

    const handleRegister = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Welcome to registration");
        // Add your registration logic here
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
