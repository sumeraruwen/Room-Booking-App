import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function BookingScreen({ route, navigation }) {
  const { hotel } = route.params;
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateType, setDateType] = useState('checkIn');
  const [guests, setGuests] = useState(2);

  const showDateSelector = (type) => {
    setDateType(type);
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      if (dateType === 'checkIn') {
        setCheckIn(selectedDate);
        if (selectedDate >= checkOut) {
          setCheckOut(new Date(selectedDate.getTime() + 86400000));
        }
      } else {
        setCheckOut(selectedDate);
      }
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const getNights = () => {
    const diffTime = checkOut.getTime() - checkIn.getTime();
    return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const totalPrice = () => {
    const nights = getNights();
    const basePrice = parseInt(hotel.price.toString().replace(/\D/g, ''), 10) || 0;
    let price = basePrice * nights;
    if (guests > 2) {
      price += (guests - 2) * 500 * nights;
    }
    return price;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.headerGradient}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
      </LinearGradient>

      <Image source={hotel.image} style={styles.heroImage} />

      <View style={styles.contentContainer}>
        <View style={styles.headerInfo}>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color="#007AFF" />
            <Text style={styles.location}>{hotel.location}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{hotel.rating} (234 reviews)</Text>
          </View>
        </View>

        <View style={styles.datePickerContainer}>
          <Text style={styles.sectionTitle}>Select Dates</Text>
          <View style={styles.dateSelectors}>
            <TouchableOpacity
              style={styles.dateBox}
              onPress={() => showDateSelector('checkIn')}
            >
              <Text style={styles.dateLabel}>Check-in</Text>
              <Text style={styles.dateValue}>{formatDate(checkIn)}</Text>
            </TouchableOpacity>
            <View style={styles.dateSeparator}>
              <MaterialIcons name="arrow-forward" size={20} color="#007AFF" />
            </View>
            <TouchableOpacity
              style={styles.dateBox}
              onPress={() => showDateSelector('checkOut')}
            >
              <Text style={styles.dateLabel}>Check-out</Text>
              <Text style={styles.dateValue}>{formatDate(checkOut)}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.guestsSection}>
          <Text style={styles.sectionTitle}>Guests</Text>
          <View style={styles.guestsControl}>
            <TouchableOpacity
              style={styles.guestButton}
              onPress={() => guests > 1 && setGuests(guests - 1)}
            >
              <MaterialIcons name="remove" size={24} color="#007AFF" />
            </TouchableOpacity>
            <Text style={styles.guestsCount}>{guests}</Text>
            <TouchableOpacity
              style={styles.guestButton}
              onPress={() => guests < 6 && setGuests(guests + 1)}
            >
              <MaterialIcons name="add" size={24} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.amenitiesSection}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.amenitiesGrid}>
            {['WiFi', 'Pool', 'Gym', 'Restaurant', 'Parking', 'Spa'].map((amenity) => (
              <View key={amenity} style={styles.amenityItem}>
                <MaterialIcons name="check-circle" size={20} color="#007AFF" />
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.priceSection}>
          <View>
            <Text style={styles.priceLabel}>Total Price</Text>
            <Text style={styles.priceValue}>
              LKR {totalPrice().toLocaleString()}
            </Text>
          </View>
          <TouchableOpacity
  style={styles.bookButton}
  onPress={() => {
    Alert.alert(
      "Booking Successful",
      "Your booking has been confirmed.",
      [
        { text: "OK", onPress: () => navigation.navigate('OrderHistoryScreen') }
      ]
    );
  }}
>
  <Text style={styles.bookButtonText}>Book Now</Text>
</TouchableOpacity>

        </View>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={dateType === 'checkIn' ? checkIn : checkOut}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
          minimumDate={dateType === 'checkIn' ? new Date() : checkIn}
          onChange={handleDateChange}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    zIndex: 2,
  },
  heroImage: {
    width: width,
    height: 300,
  },
  contentContainer: {
    padding: 20,
    marginTop: -30,
    backgroundColor: '#F8F9FB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerInfo: {
    marginBottom: 24,
  },
  hotelName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  datePickerContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  dateSelectors: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateBox: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  dateSeparator: {
    paddingHorizontal: 10,
  },
  guestsSection: {
    marginBottom: 24,
  },
  guestsControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  guestButton: {
    padding: 8,
  },
  guestsCount: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  amenitiesSection: {
    marginBottom: 24,
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  amenityText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#1A1A1A',
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
});
