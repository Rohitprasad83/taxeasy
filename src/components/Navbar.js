import React from 'react'

function Navbar() {
  return (
    <div className="flex h-16 text-2xl justify-between items-center bg-white-bg fixed top-0 left-0 right-0">
      <div className="font-bold ml-8 cursor-pointer">TaxEasy</div>
      <div className="flex mr-4 text-xl gap-4">
        <div className="cursor-pointer py-1">Search</div>
        <div className="cursor-pointer py-1">Pricing</div>
        <div className="cursor-pointer py-1">About us</div>
        <div className="cursor-pointer py-1">Contact us</div>
        <button className="cursor-pointer white-btn px-4 py-1 rounded">
          Login
        </button>
        <button className="cursor-pointer primary-btn px-4 py-1 rounded">
          Get Started
        </button>
      </div>
    </div>
  )
}

export { Navbar }
