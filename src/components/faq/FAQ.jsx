import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai' 

import './faq.css'

export default function FAQ({question, answer}) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false)

  function handleClick() {
    setIsAnswerShowing(!isAnswerShowing)
  }

  return(
    <article className='faq' onClick={handleClick}>
      <div>
        <h4>{question}</h4>
        <button className='faq__icon'>
          {
            isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
          }
        </button>
      </div>
      { isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}