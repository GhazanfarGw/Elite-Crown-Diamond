import React from 'react'

export default function Mission() {
  return (
    <>
    <div className='justify-center mx-auto bg-white'>
        <div className='max-w-screen-xl mx-auto md:py-40 px-5 md:px-10'>
            <div className='md:grid md:grid-cols-2 mx-auto gap-20'>
                <div className='md:border-2 py-10 px-0 md:px-5 border-[#B49763]'>
                    <p className='tracking-widest text-[#757575]'>
                        ELITE
                    </p>
                    <h1 className='text-3xl tracking-wider pt-2'>
                        Mission
                    </h1>
                    <p className='pt-6 text-[#757575]'>
                        To focus on clean energy, EV charging infrastructure, cybersecurity, environmental, and socioeconomic projects around the world. Our goal is to work closely with our ecosystem, protect digital and physical environments, take care of our people, and make the world a safer and better place to live.
                    </p>
                    {/* <img className='py-5' src="./solar-panels-and-wind.jpg" alt="" /> */}
                </div>
                <div className='md:border-2 py-10 px-0 md:px-5 border-[#B49763]'>
                    <p className='tracking-widest text-[#757575]'>
                        ELITE
                    </p>
                    <h1 className='text-3xl tracking-wider pt-2'>
                        Objective
                    </h1>
                    <p className='pt-6 text-[#757575]'>
                        To take account of the essential aspects that matter to humanity — including terrestrial ecosystems, renewable energy, secure digital infrastructure, atmospheric health, aquatics, sustenance, and reserves. We aim to grow conscientiously by embracing Environmental, Social, Governance (ESG) principles, along with innovation in EV technology and cybersecurity solutions.
                    </p>
                    {/* <img className='py-5' src="./DSC00753_300rgb_adj-crp-3in.jpg" alt="" /> */}
                </div>
            </div>
        </div>
        <img className='mx-auto justify-center max-w-screen-xl' src="./wind-pre.png" alt="" />
    </div>
    </>
  )
}
