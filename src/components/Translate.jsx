import React from 'react'
import language from '../utils/language'


const Translate = () => {
  return (
    <div>
      <div name="container" className='flex'>
        <div>
        <select className='flex flex-col'>
          {
           language.map((lan)=>(
            <option key={lan.id}>{language[lan.id]}</option>
           ))
          }
        </select>
        <textarea></textarea>
        </div>
      <div>

     
        <select className='flex flex-col'>
           <option>English</option>
           <option>Telugu</option>
           <option>Hindi</option>
        </select>
        <textarea></textarea>
        </div>
      </div>
    </div>
  )
}

export default Translate