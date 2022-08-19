import React from 'react'
import demo from 'assets/images/demo.svg'
function MainContent() {
  return (
    <div className="mt-24 static z-0">
      <h1 className="text-3xl md:text-4xl text-center text-dark-bg mt-32">
        Save Time, Save Money
      </h1>

      <div className="flex gap-4 justify-center my-8">
        <button className="primary-btn py-4 px-6 rounded">Get Started</button>
        <button className="primary-btn-outlined py-4 px-6 rounded">
          Request a Demo
        </button>
      </div>

      {/* Pricing  */}
      <h2 className="text-2xl underline md:text-3xl text-center text-dark-bg mt-8">
        Pricing
      </h2>
      <section className="flex w-full h-max gap-4 m-4 flex-wrap justify-center ">
        <div className="w-64 border-2 h-max border-light-bg rounded-sm border-solid drop-shadow-xl bg-light-bg pb-8">
          <h3 className="text-2xl text-center pt-8">Plan 1</h3>

          <div className="p-2 pt-4 w-64 h-max">
            <div className="flex flex-row w-full items-center space-around">
              <p className="text-lg ml-8">Benefit 1</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 2</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 3</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 4</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 5</p>
              <i className="fa-solid fa-xmark ml-auto mr-8 red-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 6</p>
              <i className="fa-solid fa-xmark ml-auto mr-8 red-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 7</p>
              <i className="fa-solid fa-xmark ml-auto mr-8 red-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 8</p>
              <i className="fa-solid fa-xmark ml-auto mr-8 red-icon text-xl"></i>
            </div>
          </div>
        </div>
        <div className="w-64 border-2 h-max border-light-bg rounded-sm border-solid drop-shadow-xl bg-light-bg pb-8">
          <h3 className="text-2xl text-center pt-8">Plan 2</h3>

          <div className="p-2 pt-4 w-64 h-max">
            <div className="flex flex-row w-full items-center space-around">
              <p className="text-lg ml-8">Benefit 1</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 2</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 3</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 4</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 5</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 6</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 7</p>
              <i className="fa-solid fa-xmark ml-auto mr-8 red-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 8</p>
              <i className="fa-solid fa-xmark ml-auto mr-8 red-icon text-xl"></i>
            </div>
          </div>
        </div>

        <div className="w-64 border-2 h-max border-light-bg rounded-sm border-solid drop-shadow-xl bg-light-bg pb-8">
          <h3 className="text-2xl text-center pt-8">Plan 3</h3>

          <div className="p-2 pt-4 w-64 h-max">
            <div className="flex flex-row w-full items-center space-around">
              <p className="text-lg ml-8">Benefit 1</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 2</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 3</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 4</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 5</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 6</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 7</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
            <div className="flex flex-row w-full items-center">
              <p className="text-lg ml-8">Benefit 8</p>
              <i className="fa-solid fa-check ml-auto mr-8 green-icon text-xl"></i>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-2xl underline md:text-3xl text-center text-dark-bg mt-8">
        Customer Reviews
      </h2>
      <section className="flex w-full h-max gap-4 m-4 flex-wrap justify-center ">
        <div className="w-64 border-2 h-max border-light-bg rounded-sm border-solid drop-shadow-xl bg-light-bg pb-8">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="image1"
            className="w-32 rounded-full h-32 mx-auto mt-4"
          />
          <div className="p-2 pt-4 w-64 h-max">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            laboriosam rem consequatur vel aliquid excepturi ab quia asperiores,
            perferendis voluptate expedita cumque. Veritatis, voluptates at.
          </div>
        </div>
        <div className="w-64 border-2 border-light-bg rounded-sm border-solid drop-shadow-xl bg-light-bg">
          <img
            src="https://images.unsplash.com/photo-1622038094167-a2e40e21df17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="image2"
            className="w-32 rounded-full h-32 mx-auto mt-4"
          />
          <p className="p-2 pt-4 w-64 h-max">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            laboriosam rem consequatur vel aliquid excepturi ab quia asperiores,
            perferendis voluptate expedita cumque. Veritatis, voluptates at.
          </p>
        </div>
        <div className="w-64 border-2 border-light-bg rounded-sm border-solid drop-shadow-xl bg-light-bg">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="image1"
            className="w-32 rounded-full h-32 mx-auto mt-4"
          />
          <p className="p-2 pt-4 w-64 h-max">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            laboriosam rem consequatur vel aliquid excepturi ab quia asperiores,
            perferendis voluptate expedita cumque. Veritatis, voluptates at.
          </p>
        </div>
        <div className="w-64 border-2 border-light-bg rounded-sm border-solid drop-shadow-xl bg-light-bg">
          <img
            src="https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="image4"
            className="w-32 rounded-full h-32 mx-auto mt-4"
          />
          <p className="p-2 pt-4 w-64 h-max">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            laboriosam rem consequatur vel aliquid excepturi ab quia asperiores,
            perferendis voluptate expedita cumque. Veritatis, voluptates at.
          </p>
        </div>
      </section>

      <section className="w-full drop-shadow-xl mx-auto w-3/4 bg-white-bg flex items-center my-8 py-8 rounded-lg md:flex-row flex-col gap-12 md:gap-0">
        <div className="flex-1 flex gap-4 flex-col justify-center">
          <h2 className="text-2xl font-bold md:pl-4 lg:text-3xl ">
            Ready to get Started?
          </h2>
          <div className="flex items-center gap-4 md:pl-4">
            <button className="primary-btn sm:py-4 sm:px-6 rounded text-md px-2 py-2">
              Try for Free
            </button>
            <div className="text-md text-primary hover:underline cursor-pointer">
              Schedule a Demo
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-0">
          <img src={demo} alt="get started" />
        </div>
      </section>

      <section className="px-2 md:px-16 md:my-8">
        <h1 className="text-2xl text-center font-bold my-4 md:text-4xl md:mt-32 md:mb-16">
          Frequently Asked Questions
        </h1>
        <div className="my-4">
          <p className="text-xl font-medium md:text-2xl">
            Lorem ipsum dolor sit amet?
          </p>
          <p className="text-md mt-2 md:text-xl">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            inventore alias qui quae mollitia molestiae quasi, nesciunt
            temporibus voluptatibus perspiciatis.
          </p>
        </div>

        <div className="my-4">
          <p className="text-xl font-medium md:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit?
          </p>
          <p className="text-md mt-2 md:text-xl">
            lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            nemo dolor facilis, quas neque nihil debitis corrupti, natus sunt
            dolores quos quo placeat sit excepturi.
          </p>
        </div>

        <div className="my-4">
          <p className="text-xl font-medium md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            laudantium?
          </p>
          <p className="text-md mt-2 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsam
            mollitia omnis dicta aut aliquam reprehenderit minima ab?
          </p>
        </div>

        <div className="my-4">
          <p className="text-xl font-medium md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            consectetur facere quis facilis consequuntur dicta?
          </p>
          <p className="text-md mt-2 md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            eveniet animi odio explicabo rerum. Quae hic earum neque numquam
            doloribus eaque odio ab deserunt quas eveniet, ad accusamus odit.
            Qui.
          </p>
        </div>
      </section>
    </div>
  )
}

export { MainContent }
