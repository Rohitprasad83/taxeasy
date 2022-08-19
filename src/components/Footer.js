import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center content-center gap-4 bg-light-bg text-dark-bg text-xl w-full h-max p-4 md:pt-8">
      <div className="flex gap-4 justify-center text-sm flex-wrap">
        <div className="w-max hover:underline cursor-pointer">Terms - ITR</div>
        <div className="w-max hover:underline cursor-pointer">
          Terms - Financial Products & GST
        </div>
        <div className="w-max hover:underline cursor-pointer">
          Privacy - ITR
        </div>
        <div className="w-max hover:underline cursor-pointer">
          Privacy - Financial Products & GST
        </div>
        <div className="w-max hover:underline cursor-pointer"> Legal </div>
      </div>

      <div className="flex gap-4 text-2xl md:gap-8">
        <div>
          <i className="fa-brands fa-facebook cursor-pointer"> </i>
        </div>
        <div>
          <i className="fa-brands fa-twitter cursor-pointer"> </i>
        </div>
        <div>
          <i className="fa-brands fa-linkedin cursor-pointer"> </i>
        </div>
        <div>
          <i className="fa-brands fa-square-instagram cursor-pointer"></i>
        </div>
        <div>
          <i className="fa-brands fa-youtube cursor-pointer"></i>
        </div>
      </div>
    </div>
  )
}

export { Footer }
