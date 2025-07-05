import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }) {
  const hotels = [
    { id: 1, name: 'Seaside Guesthouse', price: 'LKR 5,000/night', image: require('../assets/images/hotel4.jpg') },
    { id: 2, name: 'Mountain View Hotel', price: 'LKR 8,000/night', image: require('../assets/images/hotel6.jpg') },
    { id: 3, name: 'City Center Apartment', price: 'LKR 6,500/night', image: require('../assets/images/hotel5.jpg') },
    { id: 4, name: 'Lakeside Cabin', price: 'LKR 7,000/night', image: require('../assets/images/hotel6.jpg') },
  ];

  return (
    <View style={styles.container}>
      {/* fixed header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Ceylon Rooms</Text>
      </View>

      {/* scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search hotels, locations..."
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <View style={styles.filterContainer}>
          {['Price Low to High', 'Hotel', 'Guesthouse'].map((filter, index) => (
            <TouchableOpacity key={index} style={styles.filterButton} activeOpacity={0.8}>
              <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.hotelsContainer}>
          {hotels.map((hotel) => (
            <TouchableOpacity
              key={hotel.id}
              style={styles.hotelCard}
              onPress={() => navigation.navigate('BookingScreen', { hotel })}
              activeOpacity={0.85}
            >
              <View style={styles.imageWrapper}>
                <Image
                  source={hotel.image}
                  style={styles.hotelImage}
                  resizeMethod="resize" 
                   resizeMode="cover"
                />
                <LinearGradient
                  colors={['rgba(0,0,0,0.4)', 'transparent']}
                  style={styles.imageGradient}
                />
              </View>
              <View style={styles.hotelInfo}>
                <Text style={styles.hotelName}>{hotel.name}</Text>
                <Text style={styles.price}>{hotel.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    backgroundColor: '#66A7E1',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38,
    elevation: 8,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    alignItems: 'center',
    zIndex: 10,
  },
  headerText: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto-Black',
  },
  scrollViewContent: {
    paddingBottom: 24,
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    color: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 16,
    flexWrap: 'wrap',
    gap: 12,
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1A1A',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  hotelsContainer: {
    paddingHorizontal: 24,
  },
  hotelCard: {
    height:280,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    
  },
  imageWrapper: {
    position: 'relative',
  },
  hotelImage: {
    width: '100%',
    height: 200, // Increase from current size
    borderRadius: 16,
    backgroundColor: '#f0f0f0', // Add placeholder color
  },
  imageWrapper: {
    width: '100%',
    height: 200, // Match with hotelImage
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0', // Add placeholder color
  },
  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%',
  },
  hotelInfo: {
    padding: 16,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 6,
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto-Bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
});
