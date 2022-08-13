import React from 'react'

const Form = ({data, setText, count, setCount}) => {
const handleSubmit=(e)=>{
e.preventDefault()
let amount = parseInt(count)
if(count <= 0){
    amount=1
  }
if(count > 8){
    amount = 8
  }
  setText(data.slice(0, amount))
 
}
console.log(data)
  return (
    <form className='text-center d-flex justify-content-center align-items-center gap-1 col-8 mx-auto' onSubmit={handleSubmit}>
        <label htmlFor="Paragraphs" className='fs-4'>Paragraphs:</label>
        <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} className="text-center rounded-3 "/>
        <button className='btn btn-outline-info p-1'>GENERATE</button>
    </form>
  )
}

export default Form