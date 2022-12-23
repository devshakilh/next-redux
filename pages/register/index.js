
// import { Inter } from '@next/font/google'




// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {

//   const register = event => {
//     event.preventDefault();
//     const form = event.target;

//     const firstName = form.firstName.value;
//     const lastName = form.lastName.value;
//     const email = form.email.value;
//     const username = form.userName.value;
//     const password = form.password.value;
//     const phone = form.phone.value;
//     const role = form.role.value;
//     createdAt: new Date()
//     console.log(register);
//   }

//   return (
//     <div>

//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login now!</h1>

//           </div>
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={register} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">First Name</span>
//                 </label>
//                 <input type="text" name='firstName' placeholder="firstName" className="input input-bordered" />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">LastName</span>
//                 </label>
//                 <input type="text" name='lastName' placeholder="lastName" className="input input-bordered" />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input type="text" name='email' placeholder="email" className="input input-bordered" />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Phone</span>
//                 </label>
//                 <input type="text" name='phone' placeholder="phone" className="input input-bordered" />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">UserName</span>
//                 </label>
//                 <input type="text" name='userName' placeholder="username" className="input input-bordered" />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="text" name='password' placeholder="password" className="input input-bordered" />

//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Role</span>
//                 </label>
//                 <input type="text" name='role' placeholder="role" className="input input-bordered" />
//               </div>


//               <div className="form-control mt-6">
//                 <button className="btn btn-primary" type='submit'>Register</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }
// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// function Home() {
//   const history = useHistory()

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   async function registerUser(event) {
//     event.preventDefault()

//     const response = await fetch('http://localhost:1337/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//       }),
//     })

//     const data = await response.json()

//     if (data.status === 'ok') {
//       history.push('.Login')
//     }
//   }




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