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
      <Footer />
    </div>
  )
}

export { Profile }
