import React, { useState } from 'react'
import { logout } from 'features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useLocation } from 'react-router-dom'
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  const { token } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const logoutHandler = () => {
    dispatch(logout())
    navigate(location.state?.from?.pathname ?? '/login', { replace: true })
  }
  return (
    <div className="navbar-background flex h-20 justify-between items-center bg-white-bg fixed top-0 left-0 right-0 md:text-2xl z-10">
      <Link to="/" className="font-bold ml-8 cursor-pointer text-3xl">
        {' '}
        TaxEasy{' '}
      </Link>
      <div className="mr-4 hidden md:text-xl md:gap-4 md:flex">
        <div className="cursor-pointer py-1 hover:underline"> Search </div>
        <div className="cursor-pointer py-1 hover:underline"> Pricing </div>
        <div className="cursor-pointer py-1 hover:underline"> About us </div>
        <div className="cursor-pointer py-1 hover:underline"> Contact us </div>
        {token ? (
          <button
            className="cursor-pointer drop-shadow-md text-sm white-btn px-4 py-1 rounded"
            onClick={() => logoutHandler()}>
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="cursor-pointer drop-shadow-md text-sm white-btn px-4 py-1 rounded flex flex-col justify-center font-bold">
            Login
          </Link>
        )}
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
        <div className="flex flex-col gap-6 fixed top-20 w-full pt-8 h-full bg-white-bg md:hidden z-10">
          <div className="cursor-pointer px-4 hover:underline text-2xl w-max">
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
            {token ? (
              <button
                className="cursor-pointer white-btn px-4 py-4 rounded flex-grow"
                onClick={() => logoutHandler()}>
                Logout
              </button>
            ) : (
              <button className="cursor-pointer white-btn px-4 py-4 rounded flex-grow">
                Login
              </button>
            )}
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
