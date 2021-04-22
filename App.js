import React from 'react';
import { Dimensions, View } from 'react-native';
import ImageSvg from 'react-native-remote-svg';
import BottomLoading from "./app/Components/Svg/BottomLoading";
import BottomLoadingTablet from "./app/Components/Svg/BottomLoadingTablet";
import LogoLoading from "./app/Components/Svg/LogoLoading";

const {width, height} = Dimensions.get('screen');

export default function App() {
  return (

    <View
      style={{
        flex: 1,
        backgroundColor: '#f08149',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          height: height - width/2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      <LogoLoading
        style={{
          width:width/2,
          height:(width/2)*1.136,
        }}
      />
      </View>
      <BottomLoading
        style={{
          width:width,
          height:width,
        }}
      />
    </View>

  );
}

