import React, {Component} from 'react';
import style from './../styles/countdown.less';

// https://momentjs.com/
import moment from 'moment';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show_only_days: undefined,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat, showOnlyDays } = this.props;
      const show_only_days = showOnlyDays;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = then.diff(now, 'days');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds, show_only_days });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  
  render() {
    const { days, hours, minutes, seconds, show_only_days } = this.state;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }
    
    return (
      <div>
        <div className={style.countdown_wrapper}>
          {days && (
            <div className={style.countdown_item}>
              {days} 
              <span>days</span>
            </div>
          )}
          {(hours && !show_only_days) && (
            <div className={style.countdown_item}>
              <SVGCircle radius={hoursRadius} /> 
              {hours} 
              <span>hours</span>
            </div>
          )}
          {(minutes && !show_only_days) && (
            <div className={style.countdown_item}>
              <SVGCircle radius={minutesRadius} />
              {minutes} 
              <span>minutes</span>
            </div>
          )}
          {(seconds && !show_only_days) && (
            <div className={style.countdown_item}>
              <SVGCircle radius={secondsRadius} />
              {seconds} 
              <span>seconds</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Countdown;

const SVGCircle = ({ radius }) => (
  <svg className={style.countdown_svg}>
    <path style={{fill:'none',stroke:'#333','strokeWidth':4}} d={describeArc(50, 50, 48, 0, radius)}/>
  </svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){
  let start = polarToCartesian(x, y, radius, endAngle);
  let end = polarToCartesian(x, y, radius, startAngle);

  let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  let d = [
      'M', start.x, start.y, 
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');

  return d;       
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}