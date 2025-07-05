import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function OrderHistoryScreen() {
  const orders = [
    {
      id: '1',
      name: 'Seaside Guesthouse',
      image: require('../assets/images/hotel4.jpg'),
      checkIn: 'Fri, Jul 4',
      checkOut: 'Sun, Jul 6',
      guests: 2,
      price: 'LKR 10,000',
    },
    {
      id: '2',
      name: 'Mountain View Hotel',
      image: require('../assets/images/hotel5.jpg'),
      checkIn: 'Mon, Jun 20',
      checkOut: 'Wed, Jun 22',
      guests: 3,
      price: 'LKR 16,500',
    },
    {
      id: '3',
      name: 'City Center Apartment',
      image: require('../assets/images/hotel6.jpg'),
      checkIn: 'Tue, May 10',
      checkOut: 'Fri, May 13',
      guests: 2,
      price: 'LKR 19,500',
    },
  ];

  const renderOrder = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.row}>
          <MaterialIcons name="calendar-today" size={16} color="#007AFF" />
          <Text style={styles.text}>
            {item.checkIn} - {item.checkOut}
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="people" size={16} color="#007AFF" />
          <Text style={styles.text}>{item.guests} Guests</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#66A7E1', '#339CFF']}
        style={styles.headerContainer}
      >
        <Text style={styles.headerTitle}>Order History</Text>
        <Text style={styles.headerSubtitle}>
          Here are your previous bookings
        </Text>
      </LinearGradient>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 30,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginBottom:15
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFF',
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto-Black',
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#E0F0FF',
    marginTop: 4,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: width * 0.5,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  text: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
  },
});
