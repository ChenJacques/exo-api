import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Question = (props) => {

	const [selected, setSelected] = useState(null) // TODO select an answer

	const handleClick = () => {
		// TODO check answer selected and call next question
		// TODO highlight good answer
	};

	useEffect(() => {
	}, []);

	
	return (
		<div className="question-container">
			<p>{props.question}</p>
			<div className="question-answers">
				<p>{props.response1}</p>
				<p>{props.response2}</p>
				<p>{props.response3}</p>
				<p>{props.response4}</p>
			</div>
			<button onClick={handleClick}>Validate</button>
		</div>
	)
}

export default Question;