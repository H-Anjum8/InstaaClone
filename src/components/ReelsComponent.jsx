import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import SingleReel from './SingleReel';
import { videoData } from '../utils/UserData';

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <View>

      <SwiperFlatList
        vertical
        data={videoData}
        onChangeIndex={handleChangeIndexValue}
        renderItem={({ item, index }) => (
          <SingleReel item={item} index={index} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={1}
        windowSize={2}
      />

    </View>

  );
};

export default ReelsComponent;