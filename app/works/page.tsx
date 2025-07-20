import Work from '@/components/works/Work'
import React from 'react'

const workData = [
  {
    date: 'Des 2024',
    title: '@Taharica-Karir',
    position: 'UI/UX Designer',
    description: 'Taharica Karir is a recruitment platform that streamlines the employee application and selection process for PT Taharica. It provides a clear, organized approach to connecting applicants with available job opportunities and supports a structured selection process to meet the company’s hiring needs.'
  },
  {
    date: 'Mar 2024',
    title: 'Pet Roll',
    position: 'UI/UX Designer',
    description: 'Taharica Karir is a recruitment platform that streamlines the employee application and selection process for PT Taharica. It provides a clear, organized approach to connecting applicants with available job opportunities and supports a structured selection process to meet the company’s hiring needs.'
  },
  {
    date: 'Jan 2024',
    title: 'Muvmuv Mobile App',
    position: 'UI/UX Designer',
    description: 'Taharica Karir is a recruitment platform that streamlines the employee application and selection process for PT Taharica. It provides a clear, organized approach to connecting applicants with available job opportunities and supports a structured selection process to meet the company’s hiring needs.'
  },
  {
    date: 'Des 2023',
    title: 'Sympathy For Dandelions',
    position: 'UI/UX Designer',
    description: 'Taharica Karir is a recruitment platform that streamlines the employee application and selection process for PT Taharica. It provides a clear, organized approach to connecting applicants with available job opportunities and supports a structured selection process to meet the company’s hiring needs.'
  },
  {
    date: 'Aug 2023',
    title: 'Paudqu Ar-Ridho',
    position: 'UI/UX Designer',
    description: 'Taharica Karir is a recruitment platform that streamlines the employee application and selection process for PT Taharica. It provides a clear, organized approach to connecting applicants with available job opportunities and supports a structured selection process to meet the company’s hiring needs.'
  },
]

function Works() {
  return (
    <main className='px-8 md:px-64 flex flex-col flex-1 mb-10'>
      {workData.map((item, index) => (
        <Work
          key={index}
          date={item.date}
          title={item.title}
          position={item.position}
          description={item.description}
        />
      ))}
    </main>
  )
}

export default Works
