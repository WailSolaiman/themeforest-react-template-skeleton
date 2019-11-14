import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Map = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyAPYMLlgMo3B3KpI9c85ePXJNEyUJTlCFI=',
                }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33,
                }}
                defaultZoom={11}>
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map
