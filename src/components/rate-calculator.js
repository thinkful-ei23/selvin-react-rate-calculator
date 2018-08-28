import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dayRate : 0,
          numHours: 1,
        }
    }

    render() {
      // if Input day-rate changes then update state day-rate
      // if Input hourly-rate changes then update state hourly rate
      // if any of the NumberInput fields change then calculate hourly-rate
      // and update Output
        const rate =this.state.dayRate/this.state.numHours;
        return (
            <form>
                <NumberInput 
                  onInputChanged={value => this.setState({dayRate: value})} id="day-rate" label="Day rate" min={0} max={5000} />
                <NumberInput 
                    onInputChanged={value => this.setState({numHours: value})} id="hours" label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}/>
            </form>
        );
    }
}

