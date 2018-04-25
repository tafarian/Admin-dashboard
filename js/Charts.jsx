import React from 'react';

// import charts
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

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
            },
            usersCountry: {
                labels: ['Poland', 'Germany', 'France', 'United Kingdom'],
                datasets: [
                    {
                        label: 'Users origin',
                        data: [
                            700,
                            250,
                            100,
                            550
                        ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 255, 0, 0.6)',
                                'rgba(255, 45, 255, 0.6)',
                                'rgba(40, 2, 200, 0.6)',
                            ]
                    }
                ]
            },
            usersDevice: {
                labels: ['PC', 'Mobile', 'Tablet', 'Other'],
                datasets: [
                    {
                        label: 'mobiles',
                        data: [
                            500,
                            450,
                            200,
                            100
                        ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 255, 0, 0.6)',
                                'rgba(255, 45, 255, 0.6)',
                                'rgba(40, 2, 200, 0.6)',
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
                        <div className="container mainbox">
                            <div className="boxTop">
                                <Pie
                                    data={this.state.usersCountry}
                                    options={{}}/>
                            </div>
                            <div className="boxTop">
                                <Doughnut
                                    data={this.state.usersDevice}
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