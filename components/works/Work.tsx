import { ArrowUpRight } from 'lucide-react'
import React from 'react'

interface WorkProps {
  date: string;
  title: string;
  position: string;
  description: string;
}

export default function Work({ date, title, position, description }: WorkProps) {
  return (
    <div className='w-full flex flex-col mt-10 pb-5 border-b border-gray-200 last:border-none'>
      <p className='text-red-500 mb-4 text-sm'>{date}</p>
      <h1 className='font-semibold mb-4 text-2xl'>{title} <sup><ArrowUpRight className='inline -ms-2 font-normal'/></sup></h1>
      <h2 className='text-lg text-gray-500 mb-6'>{position}</h2>
      <p className='text-gray-500'>{description}</p>
    </div>
  )
}

