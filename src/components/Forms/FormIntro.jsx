import React from 'react'

const FormIntro = () => {
  return (
    <div className="mt-10 sm:mt-0">
        <div className="px-1 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
        </div>      
        <div>
            <textarea className="mt-1 focus:ring-veg-dark focus:border-veg-dark block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none h-40">
               
            </textarea>
        </div>  
    </div>
  )
}

export default FormIntro