import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function VerifyEmail() {
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    Cookies.set('verifyEmail', true)
    navigate('/profile')
  }
  return (
    <div className="modal-container justify-center items-center top-0">
      <div className="modal p-8 rounded-md flex flex-col w-96 gap-2 text-md">
        <p className="text-left text-xl">
          A verification code has been sent to your email address.
        </p>
        <p className="text-left text-md">Enter the code below</p>
        <input
          type="text"
          name="verification_code"
          className="border-solid border-light-bg border-2 rounded mt-2 text-xl px-2 py-1 text-center"
          placeholder="OTP"
          required
          value={otp}
          onChange={e => setOtp(e.target.value)}
        />
        <button
          type="button"
          className="primary-btn p-2 px-4 rounded text-sm drop-shadow-md flex-1"
          onClick={e => handleSubmit(e)}
          disabled={!otp.trim()}>
          Submit
        </button>
      </div>
    </div>
  )
}

export { VerifyEmail }
