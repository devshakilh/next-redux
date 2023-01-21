




import { useState } from "react"



export default function Home() {

    const [name, setName] = useState('')
    // const [name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('https://task-server-lilac.vercel.app/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                username,
                password,
                phone,
                role,
                createdAt: new Date()
            }),
        })
        const data = await response.json()
        console.log(data);
        if (data.status === 'ok') {
            window.location.href = '/login'


        }
    }

    return (
        <div className="bg-slate-800">
            <div className="hero min-h-screen bg-dark">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={registerUser} className="card-body">
                            <div className="form-control">

                                <input
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {/* <div className="form-control">
                                
                                <input
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="lastName"
                                    value={name}
                                    onChange={(e) => setLastName(e.target.value)}
                                />

                            </div> */}
                            <div className="form-control">

                                <input
                                    className="input input-bordered"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                            <div className="form-control">

                                <input
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="userName"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}

                                />

                            </div>
                            <div className="form-control">

                                <input
                                    className="input input-bordered"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </div>
                            <div className="form-control">

                                <input
                                    className="input input-bordered"
                                    type="phone"
                                    placeholder="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                            </div>
                            <div className="form-control">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="role" className="block text-gray-600">
                                        Role
                                    </label>
                                    <select
                                        className="input input-bordered w-full"
                                        type="role"
                                        placeholder="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}

                                    >
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                </div>
                                <input

                                />
                                <label className="label">
                                    <a href="/login" className="label-text-alt link link-hover">All ready have an account? Login now!</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Register' />

                            </div>
                        </form>
                    </div>
                </div>
            </div >


        </div >
    )
}