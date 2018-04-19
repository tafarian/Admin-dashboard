import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

// import charts
import {Bar, Line, Pie} from 'react-chartjs-2';

document.addEventListener('DOMContentLoaded', function(){

    class SideBar extends React.Component {
        render() {
            return (
                <div className="col-sm-3">
                    <h3>Admin dashboard</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Dashboard</li>
                        <li className="list-group-item">Email</li>
                        <li className="list-group-item">Calendar</li>
                        <li className="list-group-item">Charts</li>
                        <li className="list-group-item">Forms</li>
                        <li className="list-group-item">Tables</li>
                        <li className="list-group-item">Maps</li>
                    </ul>
                </div>
            )
        }
    }

    class Main extends React.Component {
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
                                1250,
                                2400
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
                            <h3 className="text">TEST</h3>
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

    class App extends React.Component {
        render() {
            return (
                <div className="container">
                    <div className="row">
                        <SideBar/>
                        <Main/>
                    </div>
                </div>
                )
        }


    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});