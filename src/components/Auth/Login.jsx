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
    <div className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden">
        {/* Left side with branding and subtle background pattern */}
        <div className="relative flex flex-col justify-center items-center bg-gradient-to-tr from-blue-800 to-indigo-900 text-white p-12 md:p-16 md:w-1/2 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
          <h1 className="relative text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 drop-shadow-lg text-center md:text-left px-4 md:px-0">Task Management Dashboard</h1>
          <p className="relative text-lg md:text-xl font-semibold max-w-xs text-center md:text-left drop-shadow-md px-4 md:px-0">
            Step into your productivity zone — manage your tasks, meet your goals
          </p>
        </div>

        {/* Right side with login form */}
        <div className="flex flex-col justify-center p-8 md:p-16 md:w-1/2">
          <form onSubmit={submitHandler} className="flex flex-col space-y-6">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 shadow-sm w-full"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 shadow-sm w-full"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg transition duration-300 w-full"
            >
              Log In
            </button>
            <a
              href="#"
              className="text-center text-blue-600 font-semibold hover:underline hover:text-blue-800 transition duration-300"
            >
              Forgotten password?
            </a>
            <hr className="my-6 border-gray-200" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
