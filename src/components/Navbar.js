import React, { useState } from 'react'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <div className="navbar-background flex h-20 justify-between items-center bg-white-bg fixed top-0 left-0 right-0 md:text-2xl z-10">
      <div className="font-bold ml-8 cursor-pointer text-3xl"> TaxEasy </div>
      <div className="mr-4 hidden md:text-xl md:gap-4 md:flex">
        <div className="cursor-pointer py-1 hover:underline"> Search </div>
        <div className="cursor-pointer py-1 hover:underline"> Pricing </div>
        <div className="cursor-pointer py-1 hover:underline"> About us </div>
        <div className="cursor-pointer py-1 hover:underline"> Contact us </div>
        <button className="cursor-pointer drop-shadow-md text-sm white-btn px-4 py-1 rounded">
          Login
        </button>
        <button className="cursor-pointer drop-shadow-md text-sm primary-btn px-4 py-1 rounded">
          Get Started
        </button>
      </div>
      <div
        onClick={() => setShowNavbar(!showNavbar)}
        className="text-2xl md:hidden cursor-pointer mr-8">
        {showNavbar ? (
          <i className="fa-solid fa-xmark"> </i>
        ) : (
          <i className="fa-solid fa-bars"> </i>
        )}
      </div>
      {showNavbar && (
        <div className="flex flex-col gap-6 justify-center absolute top-48 w-full h-full border-4 mt-8 bg-white-bg border-solid border-2 md:hidden">
          <div className="cursor-pointer inline px-4 hover:underline text-2xl w-max">
            Search
          </div>
          <div className="cursor-pointer px-4 hover:underline text-2xl w-max">
            Pricing
          </div>
          <div className="cursor-pointer px-4 hover:underline text-2xl w-max">
            About us
          </div>
          <div className="cursor-pointer px-4 hover:underline text-2xl mb-8 w-max">
            Contact us
          </div>
          <div className="flex gap-2 justify-evenly px-8">
            <button className="cursor-pointer white-btn px-4 py-4 rounded flex-grow">
              Login
            </button>
            <button className="cursor-pointer primary-btn px-4 py-4 rounded flex-grow">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export { Navbar }
