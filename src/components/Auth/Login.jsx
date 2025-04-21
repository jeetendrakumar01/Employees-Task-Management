import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-0">
        {/* Left side with Facebook branding */}
        <div className="flex flex-col justify-center items-center bg-blue-700 text-white p-12 md:w-1/2 rounded-l-lg">
          <h1 className="text-5xl font-extrabold mb-4">Task Management Dasboard</h1>
          <p className="text-lg font-semibold">
            Step into your productivity zone — manage your tasks, meet your goals
          </p>
        </div>

        {/* Right side with login form */}
        <div className="flex flex-col justify-center p-12 md:w-1/2">
          <form onSubmit={submitHandler} className="flex flex-col space-y-6">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-md px-4 py-3 text-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md px-4 py-3 text-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Log In
            </button>
            <a
              href="#"
              className="text-center text-blue-600 font-semibold hover:underline"
            >
              Forgotten password?
            </a>
            <hr className="my-4" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
