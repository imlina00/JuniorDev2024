interface QuizQuestionProps {
    id: number;
    selectedOption: {
        amount: number;
        difficulty: string;
        type: string;
    };
    data: {
        results: {
            question: string;
            correct_answer: string;
            incorrect_answers: string[];
        }[];
    };
    selectedAnswer: boolean | null;
    handleAnswer: (answer: string) => void;
    correctAnswer: boolean | null;
    score: number;
}

function QuizQuestion({ id, selectedOption, data, selectedAnswer, handleAnswer, correctAnswer, score }: QuizQuestionProps) {
    return (
        <div>
            <h3>Question {id + 1} of {selectedOption.amount}</h3>
            <h4>{data.results[id]?.question}</h4>
            <ul>
                {data.results[id]?.incorrect_answers.concat(data.results[id]?.correct_answer).map((answer, index) => (
                    <li key={index}>
                        <button onClick={() => handleAnswer(answer)} disabled={selectedAnswer !== null}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedAnswer !== null && (
                <p>{correctAnswer ? "Correct Answer!" : "Incorrect Answer!"}</p>
            )}
            <p>Score: {score}</p>
        </div>
    );
}

export default QuizQuestion;
