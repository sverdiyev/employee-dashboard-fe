import {MapStyles} from "./Map.styles.tsx";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {useMemo} from "react";

const containerStyle = {
    width: '1440px',
    height: '640px'
};

const Map = () => {
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    });

    const center = useMemo(() => ({ lat: 51.9194, lng: 19.1451 }), []);

    const customMarker = {
        path: "M8 0h0s8 0 8 8v0s0 8 -8 8h0s-8 0 -8 -8v0s0 -8 8 -8 M8 5h0s3 0 3 3v0s0 3 -3 3h0s-3 0 -3 -3v0s0 -3 3 -3",
        fillColor: "#78ECE8",
        fillOpacity: 2,
        strokeWeight: 1,
        rotation: 0,
        scale: 1,
    };

    return (
        <MapStyles>
            {
                !isLoaded ?
                    <h2>Loading ...</h2>
                    :
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={6.7}
                    >
                        <Marker icon={customMarker} position={{ lat: 51.7592, lng: 19.4560 }} />
                        <Marker icon={customMarker} position={{ lat: 51.7592, lng: 19.4560 }} />
                    </GoogleMap>
            }
        </MapStyles>
    )
}

export default Map;