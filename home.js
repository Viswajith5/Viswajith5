import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of google?',
			answerOptions: [
				{ answerText: 'Sundar', isCorrect: false },
				{ answerText: 'sundar pichai', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Mark zuckenberg', isCorrect: false },
			],
		},
		{
			questionText: 'jsx stands for __________',
			answerOptions: [
				{ answerText: 'javascript xml', isCorrect: true },
				{ answerText: 'javascript extension', isCorrect: false },
				{ answerText: 'javascript', isCorrect: false },
				{ answerText: 'xmlscript', isCorrect: false },
			],
		},
		{
			questionText: 'Why use React instead of other frameworks, like Angular?',
			answerOptions: [
				{ answerText: 'easy creation of dynamic app', isCorrect: false },
				{ answerText: 'reusable components', isCorrect: false },
				{ answerText: 'improved performance', isCorrect: false },
				{ answerText: 'all of the above', isCorrect: true },
			],
		},
        {
			questionText: 'who is the founder of Reliance',
			answerOptions: [
				{ answerText: 'tina ambani', isCorrect: false },
				{ answerText: 'nita ambani', isCorrect: false },
				{ answerText: 'anil amabani', isCorrect: false },
				{ answerText: 'Dirubai ambani', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
