import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const DiscoverPeople = () => {
  const people = [
    {
      id: 1,
      name: 'Somia Khanam',
      relation: 'Followed by user123 + 2 more',
      imageUrl: require('../assets/SearchImages/post1.jpg'),
    },
    {
      id: 2,
      name: 'Ayaan Patel',
      relation: 'Followed by sara_dev + 5 more',
      imageUrl: require('../assets/SearchImages/post2.jpg'),
    },
    {
      id: 3,
      name: 'Lina Mehra',
      relation: 'Followed by codewithme + 3 more',
      imageUrl: require('../assets/SearchImages/post3.jpg'),
    },
    {
      id: 4,
      name: 'Rohit Sharma',
      relation: 'Followed by tech_guru + 1 more',
      imageUrl: require('../assets/SearchImages/post4.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discover people</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {people.map((person) => (
          <View key={person.id} style={styles.userCard}>
            <Image 
              source={person.imageUrl}
              style={styles.userImage}
            />
            <Text style={styles.userName}>{person.name}</Text>
            <Text style={styles.userRelation}>{person.relation}</Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAllText: {
    color: '#3797EF',
    fontSize: 14,
  },
  userCard: {
    width: 150,
    marginLeft: 15,
    alignItems: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  userName: {
    fontWeight: '600',
    marginBottom: 4,
  },
  userRelation: {
    fontSize: 12,
    color: '#8e8e8e',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  followButton: {
    backgroundColor: '#3797EF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  followButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default DiscoverPeople;
