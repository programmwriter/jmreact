import React, {  useState} from 'react';
import timeSpanFormat from 'time-span-format';

import './timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [timerID, setTimerID] = useState(0);

  

  const tick = () => {
    setSeconds((sec) => sec + 1);
  };

  const onPlayTimer = () => {
    if (!started) {
      setTimerID(setInterval(() => tick(), 1000));
      setStarted(true);
    }
  };
  
  const onPausedTimer = () => {
    clearInterval(timerID);
    setStarted(false);
  };

  
  return (
    <span className="description description__flex">
      <div className="description__item">
        <button aria-label="play" type="button" className="icon icon-play" onClick={onPlayTimer} />
      </div>
      <div className="description__item">
        <button aria-label="pause" type="button" className="icon icon-pause" onClick={onPausedTimer} />
      </div>

      {timeSpanFormat(seconds)}
    </span>
  );
};
export default Timer;

