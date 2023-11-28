// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Header } from './header';
import Footer from './footer';
// import '/Users/abhishekdwivedi/Desktop/nash-waf/src/App.css'; // Import your CSS file




const App = () => {
  const [currentPillarIndex, setCurrentPillarIndex] = useState(0);
  const [answers, setAnswers] = useState(Array.from({ length: 6 }, () => Array(5).fill(-1)));
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const pillarsData = [
    {
      title: 'Pillar 1',
      questions: [
        {
          questionText: 'How do you plan your projects?',
          answers: [
            // { answerText: 'No', score: 0 },
            { answerText: 'Poor', score: 1 },
            { answerText: 'Fair', score: 2 },
            { answerText: 'Good', score: 3 },
            { answerText: 'Very Good', score: 4 },
            { answerText: 'Excellent', score: 5 },
          ],
        },
        {
          questionText: 'How do you plan your projects?',
          answers: [
            // { answerText: 'No', score: 0 },
            { answerText: 'Poor', score: 1 },
            { answerText: 'Fair', score: 2 },
            { answerText: 'Good', score: 3 },
            { answerText: 'Very Good', score: 4 },
            { answerText: 'Excellent', score: 5 },
          ],
        },
        {
          questionText: 'How do you plan your projects?',
          answers: [
            // { answerText: 'No', score: 0 },
            { answerText: 'Poor', score: 1 },
            { answerText: 'Fair', score: 2 },
            { answerText: 'Good', score: 3 },
            { answerText: 'Very Good', score: 4 },
            { answerText: 'Excellent', score: 5 },
          ],
        },


        // Add more questions for Pillar 1...
      ],
    },
    {
      title: 'Pillar 2',
      questions: [
        {
          questionText: 'How do you handle conflicts?',
          answers: [
            // { answerText: 'No', score: 0 },
            { answerText: 'Avoid conflicts', score: 1 },
            { answerText: 'Handle moderately', score: 2 },
            { answerText: 'Resolve effectively', score: 3 },
            { answerText: 'Proactively address', score: 4 },
            { answerText: 'Excellent conflict resolution', score: 5 },
          ],
        },
        {
          questionText: 'How do you handle conflicts?',
          answers: [
            // { answerText: 'No', score: 0 },
            { answerText: 'Avoid conflicts', score: 1 },
            { answerText: 'Handle moderately', score: 2 },
            { answerText: 'Resolve effectively', score: 3 },
            { answerText: 'Proactively address', score: 4 },
            { answerText: 'Excellent conflict resolution', score: 5 },
          ],
        },
        {
          questionText: 'How do you handle conflicts?',
          answers: [
            // { answerText: 'No', score: 0 },
            { answerText: 'Avoid conflicts', score: 1 },
            { answerText: 'Handle moderately', score: 2 },
            { answerText: 'Resolve effectively', score: 3 },
            { answerText: 'Proactively address', score: 4 },
            { answerText: 'Excellent conflict resolution', score: 5 },
          ],
        },
        // Add more questions for Pillar 2...
      ],
    },
    // Add more pillars...
  ];

  const handleAnswerSelection = (pillarIndex, questionIndex, event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[pillarIndex][questionIndex] = parseInt(event.target.value);
    setAnswers(updatedAnswers);
  };

  const moveToNextPillar = () => {
    setCurrentPillarIndex((current) => current + 1);
  };

  const moveToPreviousPillar = () => {
    setCurrentPillarIndex((current) => current - 1);
  };

  // Function to calculate the total score
  const calculateTotalScore = () => {
    let score = 0;
    answers.forEach((pillarAnswers, pillarIndex) => {
      pillarAnswers.forEach((answerIndex) => {
        if (answerIndex !== -1) {
          const answerScore = pillarsData[pillarIndex].questions[answers[pillarIndex].indexOf(answerIndex)].answers[answerIndex].score;
          score += answerScore;
        }
      });
    });
    return score;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const score = calculateTotalScore();
    setTotalScore(score);
    setShowResult(true);
  };

  const onChangePillar = (index) =>{
    setCurrentPillarIndex(index)
  }

  return (
    <>
    <Header/>
    <div className="App">
      <div className='background'>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div className='sideTab'>
        {/* <h1 className="pillar-title">pillar</h1> */}
          {pillarsData.map((item,index)=>(
            <div>
            <div className='pillarTab' onClick={()=> onChangePillar(index)}>
            <h3>{item.title}</h3>
            </div>
            </div>
          ))}
        </div>
      {currentPillarIndex < pillarsData.length && !showResult ? (
        <div className="questionnaire">
          <h1 className="pillar-title">{pillarsData[currentPillarIndex].title}</h1>
          {pillarsData[currentPillarIndex].questions.map((question, questionIndex) => (
            <div className="question" key={questionIndex}>
              <h3>{question.questionText}</h3>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={answers[currentPillarIndex][questionIndex]}
                  onChange={(event) => handleAnswerSelection(currentPillarIndex, questionIndex, event)}
                  list={`options-${currentPillarIndex}-${questionIndex}`}
                />
                <datalist id={`options-${currentPillarIndex}-${questionIndex}`}>
                  {question.answers.map((answer, answerIndex) => (
                    <option key={answerIndex} value={answer.score}>
                      {answer.answerText}
                    </option>
                  ))}
                </datalist>
                <div className='slider-label'>
                  <label>{question.answers[0].answerText}</label>
                  <label>{question.answers[1].answerText}</label>
                  <label>{question.answers[2].answerText}</label>
                  <label>{question.answers[3].answerText}</label>
                  <label>{question.answers[4].answerText}</label>
                  {/* <label>{question.answers[5].answerText}</label> */}
                </div>
              </div>
            </div>
          ))}
          <div className="buttons">
            <button onClick={moveToPreviousPillar} disabled={currentPillarIndex === 0}>
              Previous Pillar
            </button>
            <button onClick={currentPillarIndex === pillarsData.length - 1 ? handleSubmit : moveToNextPillar}>
              {currentPillarIndex === pillarsData.length - 1 ? 'Submit' : 'Next Pillar'}
            </button>
          </div>
        </div>
        
      ) : null}
      </div>
      {showResult ? (
        <div className="result">
          <div style={{marginTop:"-20rem"}}>
          <h2>Assessment Completed</h2>
          <p>Your total score is: {totalScore}</p>
          </div>
        </div>
      ) : null}
    </div>
    <Footer/>
    </>
  );
};

export default App;