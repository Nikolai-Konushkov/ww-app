import React from 'react';
import {WebView} from 'react-native-webview';


export default function App() {

    const onMessage = (data) => {
    }

    return (
        <>
            <WebView source={{uri: 'https://wiildwood.online/events'}}ё
                     geolocationEnabled={true}
                     onMessage={onMessage}
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
                     userAgent={"Chrome/56.0.0.0 Mobile"}
            />
        </>
    );
}
