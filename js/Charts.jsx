import React from 'react';

// import charts
import {Bar, Line, Pie} from 'react-chartjs-2';

class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersChartData: {
                labels: ['January', 'Ferbuary', 'March', 'April'],
                datasets: [
                    {
                        label: 'Users online',
                        data: [
                            350,
                            300,
                            400,
                            280
                        ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                            ]
                    }
                ]
            },
            viewsChartData: {
                labels: ['January', 'Ferbuary', 'March', 'April'],
                datasets: [
                    {
                        label: 'Views',
                        data: [
                            1200,
                            1600,
                            2400,
                            1250
                        ],
                            backgroundColor: [
                                'rgba(22, 87, 25, 0.6)',
                                'rgba(22, 87, 25, 0.6)',
                                'rgba(22, 87, 25, 0.6)',
                                'rgba(22, 87, 25, 0.6)',
                            ]
                    }
                ]
            }
        }
    }
    
    
    render() {
        return (
            <div className="col-sm-9">
                <div className="container">
                    <div className="row">
                        <h3 className="text">Charts</h3>
                    </div>
                    <div className="row bordero">
                        <div className="container mainbox">
                            <div className="boxTop">
                                <Bar
                                    data={this.state.usersChartData}
                                    options={{}}/>
                            </div>
                            <div className="boxTop">
                                <Line
                                    data={this.state.viewsChartData}
                                    options={{}}/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div> 
        )
    }
}

export default Charts;