import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

const App = () => {
	var tableau = [];
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(null);
	
	const fetchQuestions = async () => {
		const response = null // TODO: do the API call to Triva here
		axios.get('https://the-trivia-api.com/api/questions')
		.then(res => {
			for (let i = 0; i < 10; i++) {
				tableau[i] = res.data[i]
			}
			console.log(tableau)
			setQuestions([tableau]) // TODO keep questions from the API
			console.log(questions)
			setCurrentQuestion(tableau[0].question) // TODO get the first question to display i	
		}).catch(err => {
			console.log(err)
		})
	}

	const nextQuestion = () => {
		var compteur;
		var note;
		// TODO : update score and go to next question
	}

	useEffect(() => {
		fetchQuestions();
	}, [])

	return(
		<div className="App">
			<div className="App-header">
				<h1>Quiz</h1>
			</div>

			<div className="App-content">
				<Question 
					question={currentQuestion}
					// response1={tableau[0].correctAnswer}
					// response2=
					// response3=
					// response4=
					nextQuestion={nextQuestion}
				/>
			</div>
		</div> 
	);
}

export default App;