import React from 'react'

function VerifyEmail() {
  return (
    <div>
      <div>
        <p>A verification code has been sent to your email address</p>
        <p>Enter the code below</p>
        <input
          type="text"
          name="verification_code"
          className="border-solid border-light-bg border-2 rounded"
        />
      </div>
    </div>
  )
}

export { VerifyEmail }
