import { Navbar, Footer } from 'components'
import React, { useState } from 'react'
function Login() {
  const [showPass, setShowPass] = useState(false)

  return (
    <div>
      <Navbar />
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-light mt-32">Welcome Back!</h3>
        <h1 className="text-3xl font-bold">Login to your account!</h1>
        <form action="" className="m-4 flex flex-col gap-4 mb-20">
          <input
            type="text"
            placeholder="Enter email"
            className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary"
          />
          <div className="flex-1 border-solid border-light-bg border-2 p-0 flex items-center gap-2 outline-2 outline-primary inputDiv rounded">
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              className="px-4 py-2 w-full outline-0"
            />
            {showPass ? (
              <i
                className="fa-solid fa-eye mr-2"
                onClick={() => setShowPass(!showPass)}></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash mr-2"
                onClick={() => setShowPass(!showPass)}></i>
            )}
          </div>
          <div className="underline">Having trouble signing in?</div>
          <button
            className="primary-btn py-3 rounded text-md font-bold"
            type="submit">
            Login
          </button>
          <p>
            Don't have an account? <span className="font-bold">Sign up </span>
          </p>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export { Login }
