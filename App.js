import React from 'react';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
      <>
        <WebView source={{uri: 'https://wildwood-co.netlify.app'}} geolocationEnabled={true} />
      </>
  );
}
