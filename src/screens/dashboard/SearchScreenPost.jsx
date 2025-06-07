import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SearchUserData, UserData } from '../../utils/UserData'
import SearchPost from '../../components/Search/SearchPost'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';


const SearchScreenPost = () => {
     const navigation = useNavigation();
  const route = useRoute();
  const { selectedId } = route.params || {};

  // Sort so selected post comes first
  const sortedData = [...SearchUserData];
  if (selectedId !== undefined) {
    const index = sortedData.findIndex(item => item.id === selectedId);
    if (index > -1) {
      const selectedItem = sortedData.splice(index, 1)[0];
      sortedData.unshift(selectedItem);
    }
  }



    return (
       <ScrollView style={{ marginTop: 2, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 6, marginTop: 16 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20 }}>Explore</Text>
      </View>

      {sortedData.map((item, index) => (
        <SearchPost key={item.id} item={item} index={index} />
      ))}
    </ScrollView>
    )
}

export default SearchScreenPost

const styles = StyleSheet.create({
})

