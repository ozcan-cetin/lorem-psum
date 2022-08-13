import React from 'react'

const Lorem = ({text}) => {
    console.log(text);
  return (
    <div className='mt-5 mx-auto col-8 col-md-6'>{text?.map((item, index)=>{
        return(
            <p key={index} className="ipsum mt-2 text-center col-12">{item}</p>
        )
    })}</div>
  )
}

export default Lorem