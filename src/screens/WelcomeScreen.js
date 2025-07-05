import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Animated,
  Platform,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../assets/images/hotel6.jpg')}
        style={styles.background}
        resizeMode="cover"
        imageStyle={{ width: '100%', height: '100%' }}
        quality={1} // Add this for highest quality
      >
        <SafeAreaView style={styles.container}>
          <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Ceylon Rooms</Text>
              <Text style={styles.subtitle}>
                Discover Your Perfect Stay in Paradise
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.loginButton]}
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.registerButton]}
                onPress={() => navigation.navigate('Register')}
                activeOpacity={0.7}
              >
                <Text style={[styles.buttonText, styles.registerText]}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Solid overlay for better readability
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: '25%',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 1.2,
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto-Black',
  },
  subtitle: {
    fontSize: 20,
    color: '#f0f0f0',
    textAlign: 'center',
    opacity: 0.85,
    fontWeight: '400',
    lineHeight: 28,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  buttonContainer: {
    marginBottom: 60,
    gap: 20,
  },
  button: {
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  loginButton: {
    backgroundColor: '#66A7E1',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Medium' : 'Roboto-Medium',
  },
  registerText: {
    color: '#ffffff',
  },
});

export default WelcomeScreen;