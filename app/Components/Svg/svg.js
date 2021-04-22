import React from 'react';
import WebView from 'react-native-webview';

const BottomLoading = () => {
  return (
	<WebView
	javaScriptEnabled={true}
		scalesPageToFit={false}
		javaScriptEnabledAndroid={true}
		originWhitelist={['*']}
		source={{ html: `` }}
		style={{
		width: 200,
		height: 200,
		}}
	/>
  )
}

export default BottomLoading;