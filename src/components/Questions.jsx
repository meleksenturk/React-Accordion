import Question from '../components/Question'
import '../css/style.css'
function Questions({questions}){
    return(
        <div className="mainDiv">
            <h4>QUESTIONS</h4>
            {questions.map((question) => {
                return(
                    <Question key={question.id} {...question}/>
                )
            })}
        </div>
    )
}


export default Questions;