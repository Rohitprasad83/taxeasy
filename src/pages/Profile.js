import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Footer, Modal } from 'components'
import { viewUserHandler } from 'features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
function Profile() {
  const [file, setFile] = useState(null)
  const hiddenFileInput = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()
  const { userDetails } = useSelector(state => state.user)
  const { token } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(viewUserHandler({ token }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
          <h2 className="text-xl">Name - {userDetails.name}</h2>
          <p>Pan Card - {userDetails.pan_number}</p>
          <p>Email id - {userDetails.email}</p>
          <p>Mobile Number - {userDetails.mobile_num}</p>
          <div className="flex gap-4 mt-4 justify-center">
            <button
              type="button"
              className="primary-btn p-2 px-4 rounded text-sm drop-shadow-md flex-1"
              onClick={() => setOpenModal('Change Password')}>
              Change Password
            </button>
            <button
              type="button"
              className="p-2 px-4 rounded text-sm drop-shadow-md bg-red flex-1"
              onClick={() => setOpenModal('delete')}>
              Delete Account
            </button>
          </div>
        </div>
      </div>
      {openModal && <Modal from={openModal} setOpenModal={setOpenModal} />}
      <Footer />
    </div>
  )
}

export { Profile }
