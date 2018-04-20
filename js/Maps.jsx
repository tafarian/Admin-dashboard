import React from "react";

// import maps
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Maps extends React.Component {
    static defaultProps = {
        center: { lat: 50.062044, lng: 19.936721 },
        zoom: 11
      }
   
    render() {

        return (
            <div className="col-sm-9">
            <div className="container">
                <div className="row">
                    <h3 className="text">Maps</h3>
                </div>
                <div className="row bordero">
                    <div className="container mainbox">
                    <GoogleMapReact
                        defaultCenter={ this.props.center }
                        defaultZoom={ this.props.zoom }>
                        <AnyReactComponent
                            lat={ 50.062044 }
                            lng={ 19.936721 }
                        />
                    </GoogleMapReact>
                    </div>
                </div>
            </div>  
        </div>
        )
    }
}

export default Maps;