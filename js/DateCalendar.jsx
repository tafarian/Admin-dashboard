import React from "react";

// import calendar
import Calendar from 'react-calendar/dist/entry.nostyle';

class DateCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
          }
    }

    onChange = date => this.setState({ date })

    render() {

        return (
            <div className="col-sm-9">
            <div className="container">
                <div className="row">
                    <h3 className="text">Calendar</h3>
                </div>
                <div className="row bordero">
                    <div className="container mainbox">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    </div>
                </div>
            </div>  
        </div>
        )
    }
}

export default DateCalendar;