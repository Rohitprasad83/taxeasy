import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from 'components'
import loginSvg from 'assets/images/login.svg'
import { loginHandler, setError } from 'features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Ring } from '@uiball/loaders'

function Login() {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorCred, setErrorCred] = useState('')

  const dispatch = useDispatch()
  const { token, error, loading } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (token) {
      navigate(location.state?.from?.pathname ?? '/profile', { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  useEffect(() => {
    if (error) {
      setErrorCred({ email, password })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  useEffect(() => {
    if (
      (error && email !== errorCred.email) ||
      (error && password !== errorCred.password)
    ) {
      dispatch(setError())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password])

  const handleLogin = e => {
    const username = email
    dispatch(loginHandler({ e, username, password }))
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="mt-20 text-center flex w-full">
        <aside className="hidden md:flex items-center md:w-1/3 pl-8">
          <img src={loginSvg} alt="login" className="hidden md:block" />
        </aside>
        <main className="text-center md:w-2/3 w-full">
          <div className="md:w-96 sm:w-2/3 w-full mx-auto">
            <h3 className="text-2xl font-light mt-24 md:text-3xl">
              Welcome Back!
            </h3>
            <h1 className="text-3xl font-bold mt-4 md:text-4xl">
              Login to your account!
            </h1>
            <form className="m-4 flex flex-col gap-4 mb-20 mt-8">
              <input
                type="text"
                placeholder="Enter username"
                className="border-solid border-light-bg border-2 rounded px-4 py-2 outline-primary md:text-xl"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
              />
              <div className="flex-1 border-solid border-light-bg border-2 p-0 flex items-center gap-2 outline-2 outline-primary inputDiv rounded md:text-xl">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  className="px-4 py-2 w-full outline-0"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {showPass ? (
                  <i
                    className="fa-solid fa-eye mr-2 cursor-pointer"
                    onClick={() => setShowPass(!showPass)}></i>
                ) : (
                  <i
                    className="fa-solid fa-eye-slash mr-2 cursor-pointer"
                    onClick={() => setShowPass(!showPass)}></i>
                )}
              </div>
              {error && (
                <div className="text-lg text-red font-bold text-left">
                  {error}
                </div>
              )}
              <div className="border-solid border-b-2 border-light-bg w-max self-center cursor-pointer">
                Having trouble signing in?
              </div>
              <button
                className="primary-btn py-3 rounded text-md font-bold flex justify-center"
                type="submit"
                onClick={e => handleLogin(e)}
                disabled={loading}>
                {loading ? (
                  <Ring size={20} lineWeight={5} speed={1} color="black" />
                ) : (
                  'Login'
                )}
              </button>
              <Link to="/register">
                Don't have an account?{' '}
                <span className="font-bold cursor-pointer">Sign up </span>
              </Link>
            </form>
          </div>
        </main>
      </section>

      <Footer />
    </div>
  )
}

export { Login }
