// import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
// import React, { useState } from 'react';
// import { UserData } from '../utils/UserData';


// const ProfilePost = () => {
//     const [selected, setSelected] = useState(null);

//     const renderItem = ({ item }) => {
//         return (
//             <View>
//                 <Image 
//                     style={{ height: 130.9, width: 130.9 }} 
//                     source={item.post.image} 
//                 />
//             </View>
//         );
//     };

//     return (
//         <View style={{ marginTop: 20, backgroundColor:'yellow' }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 {UserData.map(item => {
//                     return (
//                         <View
//                             key={item.id}
//                             style={{
//                                 width: 196.36,
//                                 paddingBottom: 15,
//                                 borderBottomWidth: selected === item.id ? 1 : 0,
//                                 borderBottomColor: 'black'
//                             }}
//                         >
//                             <TouchableOpacity onPress={() => setSelected(item.id)}>
//                                 <Image
//                                     style={{ 
//                                         // tintColor: 'black', 
//                                         alignSelf: 'center',
//                                         width: 24,
//                                         height: 24
//                                     }}
//                                     source={item.profile}
//                  />
//                             </TouchableOpacity>
//                         </View>
//                     );
//                 })}
//             </View>

//             {selected === 1 && (
//                 <FlatList
//                     data={UserData}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id.toString()}
//                     numColumns={3}
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={{ paddingBottom: 50 }}
//                 />
//             )}
//         </View>
//     );
// };

// export default ProfilePost;