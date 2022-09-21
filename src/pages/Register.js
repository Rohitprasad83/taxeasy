import React, { useState, useEffect } from 'react'
import { Navbar, Footer, VerifyEmail } from 'components'
import signupSvg from 'assets/images/signup.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signUpHandler } from 'features/auth/authSlice'
import { Ring } from '@uiball/loaders'

function Register() {
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    pan: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const dispatch = useDispatch()
  const { token, verifyEmail, error, loading } = useSelector(
    state => state.auth
  )
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (token && verifyEmail) {
      navigate(location.state?.from?.pathname ?? '/profile', { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  function changeHandler(e) {
    return setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(signUpHandler({ e, credentials }))
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="mt-20 text-center flex w-full">
        {token !== undefined && token !== null ? (
          <VerifyEmail />
        ) : (
          <>
            <aside className="hidden md:flex items-center md:w-1/3 pl-8">
              <img src={signupSvg} alt="Signup" className="hidden md:block" />
            </aside>
            <main className="text-center md:w-2/3 w-full">
              <div className="md:w-96 sm:w-2/3 w-full mx-auto">
                <h3 className="text-2xl font-light mt-16 md:text-3xl">
                  Welcome!
                </h3>
                <h1 className="text-3xl font-bold mt-4 md:text-4xl">
                  Create your account
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="m-4 flex flex-col gap-4 mb-20 mt-8">
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
                    value={credentials.name}
                    onChange={e => changeHandler(e)}
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
                    value={credentials.email}
                    onChange={e => changeHandler(e)}
                    name="email"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
                    value={credentials.phone}
                    onChange={e => changeHandler(e)}
                    name="phone"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Enter Pan Card Number"
                    className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
                    value={credentials.pan}
                    onChange={e => changeHandler(e)}
                    name="pan"
                    required
                  />
                  <div className="flex-1 border-solid border-light-bg border-2 p-0 flex items-center gap-2 outline-2 outline-primary inputDiv rounded md:text-xl">
                    <input
                      type={showPass ? 'text' : 'password'}
                      placeholder="Password"
                      className="px-4 py-2 w-full outline-0"
                      value={credentials.password}
                      onChange={e => changeHandler(e)}
                      name="password"
                      required
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
                      value={credentials.confirmPassword}
                      onChange={e => changeHandler(e)}
                      name="confirmPassword"
                      required
                    />
                    {showConfirmPass ? (
                      <i
                        className="fa-solid fa-eye mr-2"
                        onClick={() =>
                          setShowConfirmPass(!showConfirmPass)
                        }></i>
                    ) : (
                      <i
                        className="fa-solid fa-eye-slash mr-2"
                        onClick={() =>
                          setShowConfirmPass(!showConfirmPass)
                        }></i>
                    )}
                  </div>
                  {error && (
                    <div className="text-lg text-red font-bold text-left">
                      {error}
                    </div>
                  )}
                  <button
                    className="primary-btn py-3 rounded text-md font-bold flex justify-center"
                    type="submit"
                    disabled={loading}>
                    {loading ? (
                      <Ring size={20} lineWeight={5} speed={1} color="black" />
                    ) : (
                      'Create Account'
                    )}
                  </button>
                  <Link to="/login">
                    Already Registered ?
                    <span className="font-bold cursor-pointer"> Login </span>
                  </Link>
                </form>
              </div>
            </main>
          </>
        )}
      </section>
      <Footer />
    </div>
  )
}

export { Register }
