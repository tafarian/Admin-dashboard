import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {
        render() {
            return (
                <div className="main">
                    test
                </div>
                )
        }


    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});