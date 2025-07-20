import React from 'react'

export default function Detail() {
  return (
    <div className='flex flex-col gap-8 p-4 text-end'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-4xl flex items-center ps-6 font-semibold'>
          <span className='flex-1 pb-2 border-b border-gray-200 whitespace-pre'>About Me </span><span>-</span>
        </h2>
        <p className='text-gray-600'>I am a student of Information Systems with a strong passion for the world of product design. I enjoy creating digital products such as websites or mobile apps, with visually appealing designs to ensure that users find it easy to use the digital products I create.</p>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-4xl flex items-center ps-6 font-semibold'>
          <span className='flex-1 pb-2 border-b border-gray-200 whitespace-pre'>Education </span><span>-</span>
        </h2>
          <ul className="space-y-2 flex flex-col items-end">
            <li className="flex items-start gap-x-2">
              <span>Diploma in Information System - UPN Veteran Jakarta,
                (2022 - Present)</span>
              <span className="text-xl">•</span>
            </li>
            <li className="flex items-start gap-x-2">
              <span>Bachelor of Agriculture Engineering Universitas Syiah Kuala (2021 - 2022)</span>
              <span className="text-xl">•</span>
            </li>
            <li className="flex items-start gap-x-2">
              <span>Science - 80 Senior High School Jakarta (2018 - 2021)</span>
              <span className="text-xl">•</span>
            </li>
          </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-4xl flex items-center ps-6 font-semibold'>
          <span className='flex-1 pb-2 border-b border-gray-200 whitespace-pre'>Experiences </span><span>-</span>
        </h2>
        <p className='text-gray-600 flex flex-col items-end'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div >
  )
}

