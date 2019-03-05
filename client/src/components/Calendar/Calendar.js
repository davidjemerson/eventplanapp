import React, { Component } from 'react';
import Moment from 'moment';
import './calendar.css';

class Calendar extends Component {
    state = {
        date: Moment(),
        selectedDates: []
    };

    nextMonth = () => {
        this.setState({
            date: this.state.date.add(1, "months")
        });
    };
    
    prevMonth = () => {
        this.setState({
            date: this.state.date.subtract(1, "months")
        });
    };

    dateClicked = day => {
        this.state.selectedDates.push(day);
        console.log(this.state.selectedDates);
    }

    renderMonth() {
        return(
            <div className='row month-bar'>
                <div className='col-2'>
                    <div className='event-date picker' onClick={this.prevMonth}>
                        Previous Month
                    </div>
                </div>
                <div className='col-8 text-center'>
                    <h3>{Moment(this.state.date).format("MMMM YYYY")}</h3>
                </div>
                <div className='col-2 text-right'>
                    <div className='event-date picker' onClick={this.nextMonth}>
                        Next Month
                    </div>
                </div>
            </div>
        );
    }

    renderDays() {
        const days = [];
        for (let x = 0 ; x < 7 ; x++) {
            days.push(
                <div className="col days" key={x}>
                    {this.state.date.day(x).format('dddd')}
                </div>
            );
        }
        return <div className="days-row row">{days}</div>;
    }

    renderDates() {
        const now = Moment(this.state.date);
        const monthStart = Moment(now).startOf('month').startOf('week');
        const monthEnd = Moment(now).endOf('month').endOf('week');
        const rows = [];
        let dates = [];
        let rowCount = 1;

        while (monthStart <= monthEnd) {
            for (let i = 0 ; i < 7 ; i++) {
                let thisDay = Moment(monthStart);
                dates.push(
                    <div className={now.month() !== thisDay.month() ? 'col date other-month' : this.state.selectedDates.includes(thisDay) ? 'col date selected' : 'col date'} onClick={() => this.dateClicked(thisDay)} key={thisDay}>
                        {monthStart.format('DD')}
                    </div>
                );
                monthStart.add(1, 'day');
            }
            rows.push(
                <div className='row' key={rowCount}>
                    {dates}
                </div>
                );
            rowCount++;
            dates = [];
        }
        return <div>{rows}</div>;
    }

    render() {
        return(
            <div className='calendar'>
                {this.renderMonth()}
                {this.renderDays()}
                {this.renderDates()}
            </div>
        );
    }

}

export default Calendar;