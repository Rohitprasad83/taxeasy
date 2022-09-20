import React from 'react'

function Modal({ from, setOpenModal }) {
  return (
    <div className="modal-container justify-center items-center">
      <div className="modal p-8 rounded-md flex flex-col w-96 text-xl ">
        <p>
          {from === 'delete'
            ? 'Are you sure you want to delete the account?'
            : 'Change Password'}
        </p>
        {from === 'delete' ? (
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="mt-4 p-1 border-solid border-dark-bg border-2 rounded"
          />
        ) : (
          <>
            <input
              type="text"
              name="oldPassword"
              placeholder="Enter your old password"
              className="mt-4 p-1 border-solid border-dark-bg border-2 rounded"
            />
            <input
              type="text"
              name="newPassword"
              placeholder="Enter your new password"
              className="mt-4 p-1 border-solid border-dark-bg border-2 rounded"
            />
          </>
        )}
        <div className="flex gap-4 mt-4 justify-center">
          <button
            type="button"
            className="primary-btn p-2 px-4 rounded text-sm drop-shadow-md flex-1"
            onClick={() => setOpenModal(false)}>
            Cancel
          </button>
          <button
            type="button"
            className="border-solid border-light-bg border-2 p-2 px-4 rounded text-sm drop-shadow-md bg-red flex-1">
            {from === 'delete' ? 'Delete' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}

export { Modal }
