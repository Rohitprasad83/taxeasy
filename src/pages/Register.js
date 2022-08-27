import React from 'react'
import { Navbar, Footer } from 'components'

function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="mt-20 text-center flex w-full">
        <aside>
          <img src="" alt="" />
        </aside>
        <main className="text-center md:w-2/3 w-full">
          <div className="md:w-96 sm:w-2/3 w-full mx-auto">
            <h3 className="text-2xl font-light mt-24 md:text-3xl">Welcome!</h3>
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
              <input type="password" placeholder="Enter Password" />
              <input type="password" placeholder="Confirm Password" />
              <button
                className="primary-btn py-3 rounded text-md font-bold"
                type="submit">
                Create Account
              </button>
              <p>
                Already Registered?{' '}
                <span className="font-bold cursor-pointer">Login</span>
              </p>
            </form>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export { Register }
