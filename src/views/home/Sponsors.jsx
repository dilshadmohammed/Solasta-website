import React from 'react'

function Sponsors() {
  return (
    <section className='p-8 flex flex-col text-2xl font-poppins items-center justify-center '>
      <h1 className='text-white text-4xl font-semibold'>Sponsors</h1>
      <div className='flex flex-col items-center gap-3 my-10'>
        <div>
          <h2>Platinum</h2>
          <hr />
        </div>
        <div>
          <h2>Gold</h2>
          <hr />
        </div>
        <div>
          <h2>Silver</h2>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default Sponsors