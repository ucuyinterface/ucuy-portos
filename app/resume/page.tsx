import { Button } from '@/components/ui/button'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Detail from '@/components/resume/Detail'

function Resume() {
  return (
    <main className='px-8 md:px-64 flex  items-stretch justify-center'>
      <div className='flex flex-col items-start w-5/12 pe-8'>
        <div className='aspect-[4/5] w-5/12 relative mb-6'>
          <Image src="/assets/img/resume.png" fill alt="Resume" className='rounded-lg shadow-lg mb-8' />
        </div>
        <h1 className='text-3xl font-[550] mb-4 text-primary'>Ucuy Interface</h1>
        <h2 className="text-red-500 text-md mb-14 pe-10">
          “I design products and brands with the highest craft standards.”
        </h2>
        <Button variant="destructive" className='font-semibold'>
          Download Resume <ArrowRight />
        </Button>
      </div>

      <div className='flex flex-col h-[28rem] overflow-y-auto  w-7/12'>
        <Detail />
      </div>
    </main>
  )
}

export default Resume
