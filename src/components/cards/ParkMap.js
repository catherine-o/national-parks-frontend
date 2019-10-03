import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

export class ParkMap extends Component {

    getLat = () => {
        if (this.props.park.latLong) {
        return this.props.park.latLong.split(',')[0].split(':')[1]
        }
    }
    
    getLng = () => {
        if (this.props.park.latLong) {
        return this.props.park.latLong.split(',')[1].split(':')[1]
        }
    }
    
    render() {
    return (
        
        <Map
            className='map'
            google={this.props.google}
            zoom={9}
            initialCenter={{
                lat: this.getLat(),
                lng: this.getLng()
            }}
        />
        
    )}
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(ParkMap)