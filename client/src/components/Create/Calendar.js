import React, { Component } from 'react';
import Moment from 'moment';

class Calendar extends Component {
    constructor() {
        super();  
        this.state = {
            date: Moment()
        };
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    nextMonth() {
        this.setState({date: this.state.date.add(1, "months")});
    }

    prevMonth() {
        this.setState({date: this.state.date.subtract(1, "months")});
    }

    render() {
        return(
            <div className="calendar-holder">
                <div id='potentialDates' className='row'>
                    <div className='col-2'>
                        <div className='event-date' onClick={ this.prevMonth }>Prev</div>
                    </div>
                    <div className='col-8 text-center'>
                        <h2 id='monthName'>{ this.state.date.format("MMMM YYYY") }</h2>
                    </div>
                    <div className='col-2 text-right'>
                        <div className='event-date' onClick={ this.nextMonth }>Next</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Calendar;