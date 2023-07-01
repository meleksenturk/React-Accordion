
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
function Question({ id, title, info }) {
    const [showQuestion, setShowQuestion] = useState(false)
    return (
        <>

            <div className="questionDiv">
                <div className="questionTitle">
                    <p>{title}</p>
                </div>
                <div className='questionButtonDiv'>
                    <button className='questionButton' onClick={() => setShowQuestion(!showQuestion)}>
                        {showQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>

                </div>

            </div>
            {showQuestion && <div className='questionInfo'>
                <p>{info}</p>
            </div>}
        </>
    )
}

export default Question;