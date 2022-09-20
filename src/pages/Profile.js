import React, { useState, useRef } from 'react'
import { Navbar, Footer } from 'components'

function Profile() {
  const [file, setFile] = useState(null)
  const hiddenFileInput = useRef(null)

  const handleInputClick = e => {
    hiddenFileInput.current.click()
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mt-20 text-center w-full">
        <div className="bg-light-bg w-48 h-48 rounded-full mx-auto mt-8">
          {file && (
            <img
              src={file}
              alt="file"
              className="w-48 h-48 rounded-full mx-auto"
            />
          )}
        </div>
        <button className="text-2xl" onClick={handleInputClick}>
          Upload
        </button>
        <input
          accept="image/*"
          ref={hiddenFileInput}
          type="file"
          onChange={event =>
            setFile(window.URL.createObjectURL(event.target.files[0]))
          }
          className="hidden"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-xl md:p-2 gap-2 mt-8 w-96 border-solid border-light-bg border-2 rounded-md">
          <h2 className="text-xl">Name - Rohit Prasad</h2>
          <p>Pan Card</p>
          <p>Email id</p>
          <p>Mobile Number</p>
          <div className="flex gap-4 mt-4 justify-center">
            <button
              type="button"
              className="primary-btn p-2 px-4 rounded text-sm drop-shadow-md font-bold">
              Change Password
            </button>
            <button
              type="button"
              className="border-solid border-light-bg border-2 p-2 px-4 rounded text-sm drop-shadow-md font-bold bg-red-600">
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Profile }
