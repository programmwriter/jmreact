import React, {Component} from 'react';
import timeSpanFormat from 'time-span-format';

import './timer.css';

export default class Timer extends Component{
  state = {
    seconds:0,
    started: false
  }

  onPlayTimer = () => {
    const {started} = this.state;
    if(!started){ 
      this.timerID = setInterval(() => this.tick(), 1000);
      this.setState({started:true});
    }
  }

  onPausedTimer = () => {
    clearInterval(this.timerID);
    this.setState({started:false});
  }

  tick = () => {
    this.setState((prevState) => ({
      seconds:prevState.seconds + 1
    }));
  }

  render(){

    const {seconds} = this.state;

    return(
      <span className="description description__flex">
        <div className="description__item"><button aria-label="play" type="button" className="icon icon-play" onClick={this.onPlayTimer}/></div>
        <div className="description__item"><button aria-label="pause" type="button" className="icon icon-pause" onClick={this.onPausedTimer}/></div>
        
        {timeSpanFormat(seconds)}
        
      </span>
    )
  }
}