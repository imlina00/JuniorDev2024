import { useState, useEffect } from "react";
import axios from "axios";
import QuizSettings from "./components/QuizSettings";
import QuizQuestion from "./components/QuizQuestion";
import "./App.css";

function App() {

    const [id, setId] = useState(0);
    const [data, setData] = useState({
        response_code: null,
        results: [],
    });
    const [selectedOption, setSelectedOption] = useState({
        amount: 5,
        difficulty: "medium",
        type: "multiple",
    });
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    useEffect(() => {
        if (quizStarted) {
            fetchQuestions();
        }
    }, [quizStarted]);

    function fetchQuestions() {
        if (selectedOption.amount > 0) {
            let url = `https://opentdb.com/api.php?amount=${selectedOption.amount}`;
            if (selectedOption.difficulty !== "any") {
                url += `&difficulty=${selectedOption.difficulty}`;
            }
            if (selectedOption.type !== "any") {
                url += `&type=${selectedOption.type}`;
            }
            axios.get(url).then((response) => {
                setData(response.data);
                setId(0);
                setSelectedAnswer(null);
                setCorrectAnswer(null);
                setScore(0);
                setGameOver(false);
            });
        } else {
            alert("Please enter a valid number of questions greater than 0.");
        }
    }

    function handleOptionChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setSelectedOption((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleStartQuiz() {
        setQuizStarted(true);
    }

    function handleAnswer(answer: string) {
        if (selectedAnswer === null) {
            const isCorrect = answer === data.results[id].correct_answer;
            setCorrectAnswer(isCorrect);
            if (isCorrect) {
                setScore((prevScore) => prevScore + 1);
            }
            setSelectedAnswer(true);
            setTimeout(() => {
                setSelectedAnswer(null);
                setCorrectAnswer(null);
                if (id === selectedOption.amount - 1) {
                    setGameOver(true);
                } else {
                    setId((prevId) => prevId + 1);
                }
            }, 2000);
        }
    }

    function handleRestartQuiz() {
        setQuizStarted(false);
        setGameOver(false);
    }

    return (
        <div className="App">
            <h1>Trivia Quiz</h1>
            <div className="content">
                {!quizStarted ? (
                    <QuizSettings
                        selectedOption={selectedOption}
                        handleOptionChange={handleOptionChange}
                        handleStartQuiz={handleStartQuiz}
                    />
                ) : gameOver ? (
                    <div>
                        <h3>GAME OVER!</h3>
                        <p>Your Score: {score}</p>
                        <button onClick={handleRestartQuiz}>Play Again</button>
                    </div>
                ) : (
                    <QuizQuestion
                        id={id}
                        selectedOption={selectedOption}
                        data={data}
                        selectedAnswer={selectedAnswer}
                        handleAnswer={handleAnswer}
                        correctAnswer={correctAnswer}
                        score={score}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
