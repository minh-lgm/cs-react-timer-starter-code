import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, splits, addSplit, isRunning } = useTimer(0);

  return (
    <div className="App container">
      <h1>⏱️ Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p className="timer__text">{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button className="button" onClick={stopTimer} disabled={!isRunning}>
            Stop
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button 
            className="button" 
            onClick={addSplit}
            disabled={!isRunning}
          >
            Split
          </button>
        </div>

        {splits.length > 0 && (
          <div className="splits__wrapper">
            <h2>Split Times</h2>
            <div className="splits__list">
              {splits.map((splitTime, index) => (
                <div key={index} className="split__item">
                  <span>Split {index + 1}:</span>
                  <span>{formatTime(splitTime)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
