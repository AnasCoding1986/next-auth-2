"use client";

const RegisterPage = () => {

    const handleRegister = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Welcome to registration"); 
        // Add your registration logic here
    }

    return (
        <div>
            <form onSubmit={handleRegister} className="card-body">
                <div>
                    <label>
                        <span>Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div>
                    <label>
                        <span>Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                </div>
                <div className="mt-6">
                    <button type="submit" className="p-3 rounded-md bg-cyan-600 text-white font-semibold">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
