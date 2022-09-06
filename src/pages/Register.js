import React, { useState } from 'react'
import { Navbar, Footer } from 'components'
import signupSvg from 'assets/images/signup.svg'
import { Link } from 'react-router-dom'

function Register() {
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="mt-20 text-center flex w-full">
        <aside className="hidden md:flex bg-red items-center md:w-1/3 pl-8">
          <img src={signupSvg} alt="Signup" className="hidden md:block" />
        </aside>
        <main className="text-center md:w-2/3 w-full">
          <div className="md:w-96 sm:w-2/3 w-full mx-auto">
            <h3 className="text-2xl font-light mt-16 md:text-3xl">Welcome!</h3>
            <h1 className="text-3xl font-bold mt-4 md:text-4xl">
              Create your account
            </h1>
            <form className="m-4 flex flex-col gap-4 mb-20 mt-8">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
              />
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
              />
              <input
                type="text"
                placeholder="Enter Pan Card Number"
                className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
              />
              <div className="flex-1 border-solid border-light-bg border-2 p-0 flex items-center gap-2 outline-2 outline-primary inputDiv rounded md:text-xl">
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
              <div className="flex-1 border-solid border-light-bg border-2 p-0 flex items-center gap-2 outline-2 outline-primary inputDiv rounded md:text-xl">
                <input
                  type={showConfirmPass ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className="px-4 py-2 w-full outline-0"
                />
                {showConfirmPass ? (
                  <i
                    className="fa-solid fa-eye mr-2"
                    onClick={() => setShowConfirmPass(!showConfirmPass)}></i>
                ) : (
                  <i
                    className="fa-solid fa-eye-slash mr-2"
                    onClick={() => setShowConfirmPass(!showConfirmPass)}></i>
                )}
              </div>
              <button
                className="primary-btn py-3 rounded text-md font-bold"
                type="submit">
                Create Account
              </button>
              <Link to="/login">
                Already Registered ?
                <span className="font-bold cursor-pointer"> Login </span>
              </Link>
            </form>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export { Register }
