import React, {Component} from 'react';
import style from './../styles/styles.less';

// https://codepen.io/FlorinPop17/pen/YbpwyG
import Countdown from './Countdown.jsx'

// https://d3js.org/
import * as d3 from 'd3';

function getHashValue(key) {
  let matches = location.hash.match(new RegExp(key+'=([^&]*)'));
  return matches ? matches[1] : null;
}
const filename = getHashValue('filename') ? getHashValue('filename') : 'data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    d3.json('./data/' + filename + '.json').then((data) => {
      this.setState((state, props) => ({
        data:data.events,
      }));
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        {this.state.data.map((item, i) =>
          <div className={style.grid} style={{backgroundColor:item.bgcolor}}key={item.datetime}>
            <h1>{item.title_before}</h1><h3>{item.desc_before}</h3>{(new Date().toISOString() < item.datetime) ? <Countdown timeTillDate={item.datetime} timeFormat="YYYY-MM-DDTHH:mm:ssZ" showOnlyDays={(i === 1) ? false : true} /> : ''}<h3>{item.desc_before2}</h3>
          </div>
        )}
        
      </div>
    );
  }
}
export default App;