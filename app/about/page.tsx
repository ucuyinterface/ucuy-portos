import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <main className='px-8 md:px-64 flex flex-col items-center text-center mb-14 text-gray-500'>
      <div className='aspect-[2/1] w-5/6 relative mb-10 mt-24'>
        <Image src="/assets/img/about.png" fill alt="Resume" className='rounded-lg shadow-lg mb-8' />
      </div>
      <h1 className='text-3xl font-[550] mb-4 text-primary'>
        I was created to create.
      </h1>
      <div className='flex flex-col gap-4 px-8 mb-10'>
        <p>My name is Burhannudin, but people usually call me Ucuy and I put interface on behind it so its become Ucuy Interface (thats cool imo). I've lived my whole life from birth till now, in the vibrant city of Jakarta, Indonesia. Currently, I'm vibing at the sweet spot where design, coding, and systems all collide</p>
        <p>My day-to-day activities mostly involve from the beginning to the end of the product development process.</p>
        <p>I'm an information systems undergraduate from UPNVJ. As a UI/UX designer, I feel comfortable working with my laptop called “Dobleh” yeah, my laptop has a name. Somethin that merge my creativity, problem-solving, and empathy into something that genuinely impacts people’s lives. Throughout my journey until now, I've come to understand that design and technology complement each other in building better products. I’ve realized that design and technology are like two sides of the same coin they work hand in hand to create seamless, functional, and engaging experiences.</p>
        <p>When I'm not in front of a screen, I enjoy reading books, playing video games or  turning raw materials into something beautiful. I also enjoy listening to poppunk, alternative/indie and keroncong. Lizzy McAlpine is a favorite of mine because known for her introspective and emotionally raw music, blending elements of indie-pop, folk, and alternative genres also, her music feels raw and beautifully imperfect.</p>
      </div>

      <div className='mb-14'>
        <h1 className='text-3xl font-[550] mb-4 text-primary'>
          Skills
        </h1>
        <div className='flex gap-8 justify-center'>
          <Image src="/assets/img/skill1.png" alt="" width={120} height={120} />
          <Image src="/assets/img/skill2.png" alt="" width={120} height={120} />
          <Image src="/assets/img/skill3.png" alt="" width={120} height={120} />
          <Image src="/assets/img/skill4.png" alt="" width={120} height={120} />
          <Image src="/assets/img/skill5.png" alt="" width={120} height={120} />
        </div>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-[550] mb-6 text-primary'>
          Certificates
        </h1>
        <div className='flex flex-wrap gap-6 justify-center'>
          <Image src="/assets/img/certificate1.png" alt="" width={420} height={420} />
          <Image src="/assets/img/certificate2.png" alt="" width={420} height={420} />
          <Image src="/assets/img/certificate3.png" alt="" width={420} height={420} />
        </div>

      </div>
    </main>
  )
}

export default About
