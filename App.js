import React, {useState} from 'react';
import {WebView} from 'react-native-webview';


export default function App() {

    const onMessage = (data) => {
    }

    return (
        <>
            <WebView source={{uri: 'https://wiildwood.online/events'}}
                     geolocationEnabled={true}
                     onMessage={onMessage}
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
            />
        </>
    );
}
