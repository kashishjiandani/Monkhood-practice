import React from 'react'

function CollectCards({title,img}) {
  return (
    <>
    <div className={`${img} rounded-lg h-[90px] w-[120px] flex items-center justify-center`}>
            <p className="text-base text-white ">{title}</p>
    </div>
    </>
  )
}

export default CollectCards