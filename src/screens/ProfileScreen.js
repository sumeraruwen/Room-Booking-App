import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileScreen({ navigation }) {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: require('../assets/images/avatar.jpg'), // replace with your avatar image
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 30}}>
      <LinearGradient
        colors={['#66A7E1', '#339CFF']}
        style={styles.headerContainer}
      >
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </LinearGradient>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={22} color="#66A7E1" />
          <Text style={styles.menuText}>Edit Profile</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#A0A0A0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="lock-closed-outline" size={22} color="#66A7E1" />
          <Text style={styles.menuText}>Change Password</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#A0A0A0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={22} color="#66A7E1" />
          <Text style={styles.menuText}>Notifications</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#A0A0A0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={22} color="#66A7E1" />
          <Text style={styles.menuText}>Help & Support</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#A0A0A0" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, {borderBottomWidth: 0}]} onPress={() => navigation.replace('Login')}>
          <Ionicons name="log-out-outline" size={22} color="#FF4D4D" />
          <Text style={[styles.menuText, {color: '#FF4D4D'}]}>Logout</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#FF4D4D" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto-Bold',
  },
  email: {
    fontSize: 14,
    color: '#E0F0FF',
    marginTop: 4,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  menuContainer: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
});
