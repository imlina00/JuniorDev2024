import React from "react";

interface QuizSettingsProps {
    selectedOption: {
        amount: number;
        difficulty: string;
        type: string;
    };
    handleOptionChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleStartQuiz: () => void;
}

function QuizSettings({ selectedOption, handleOptionChange, handleStartQuiz }: QuizSettingsProps) {
    return (
        <div>
            <div className="setting">
                <label>
                    Number of Questions:
                    <br />
                    <input
                        type="number"
                        name="amount"
                        value={selectedOption.amount}
                        onChange={handleOptionChange}
                        min={1}
                    />
                </label>
            </div>
            <br />
            <div className="setting">
                <label>
                    Difficulty:
                    <br />
                    <select name="difficulty" value={selectedOption.difficulty} onChange={handleOptionChange}>
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
            </div>
            <br />
            <div>
                <label>
                    Type:
                    <br />
                    <select name="type" value={selectedOption.type} onChange={handleOptionChange}>
                        <option value="any">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True/False</option>
                    </select>
                </label>
            </div>
            <br />
            <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    );
}

export default QuizSettings;
