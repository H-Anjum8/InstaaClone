import React, {useState} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';

import SearchBox from '../../components/Search/SearchBox';
import SearchContent from '../../components/Search/SearchContent';

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
      console.log('Image selected in Search.js:', data);
    setImage(data);
  };

 

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        
      </ScrollView>
     
    </View>
  );
};

export default Search;