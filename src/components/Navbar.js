import React from 'react'

function Navbar() {
  return (
    <div className="flex h-16 text-2xl justify-between items-center bg-white-bg">
      <div className="font-bold ml-2 cursor-pointer">TaxEasy</div>
      <div className="flex mr-2 text-xl gap-2">
        <div className="cursor-pointer">Search</div>
        <div className="cursor-pointer">About us</div>
        <div className="cursor-pointer">Contact us</div>
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
