import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="col-sm-9">
                <div className="container">
                    <div className="row">
                        <h3 className="text">Dashboard</h3>
                    </div>
                    <div className="row bordero">
                        <div className="container mainbox">
                            <div className="container successAlert">
                                <span>Success</span>
                                <p>You successfully logged into dashboard.</p>
                            </div>
                        </div>
                        <div className="container mainbox">
                            <div className="container failureAlert">
                                <span>Failure</span>
                                <p>You unsuccessfully logged into dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Dashboard