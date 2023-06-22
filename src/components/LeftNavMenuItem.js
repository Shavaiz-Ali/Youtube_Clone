import React from 'react'

const LeftNavMenuItem = ({text, icon, className, action}) => {
  return (
  <div className={"text-white h-auto overflow-hidden text-sm cursor-pointer h-10 flex items-center py-2 px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] mt-0" + className} onClick={action}>
      <span className='text-xl mr-5'>{icon}</span>
      {text}
    </div>
  )
}
export default LeftNavMenuItem
