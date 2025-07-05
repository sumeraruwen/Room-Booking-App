// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Platform,
// } from 'react-native';

// export default function RegisterScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const validateName = (name) => {
//     return name.trim().length >= 2;
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleRegister = () => {
//     if (!name || !email || !password) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (!validateName(name)) {
//       Alert.alert('Error', 'Name must be at least 2 characters long.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email address.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       Alert.alert('Error', 'Password must be at least 6 characters long.');
//       return;
//     }

//     navigation.replace('Main');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContent}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Register</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             placeholderTextColor="#A0A0A0"
//             value={name}
//             onChangeText={setName}
//             autoCapitalize="words"
//           />

//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             placeholderTextColor="#A0A0A0"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />

//           <Text style={styles.label}>Password</Text>
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder=""
//               placeholderTextColor="#A0A0A0"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity
//               style={styles.toggleButton}
//               onPress={() => setShowPassword(!showPassword)}
//             >
//               <Text style={styles.toggleButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.optionsRow}>
//             <TouchableOpacity
//               style={styles.checkboxContainer}
//               onPress={() => setRememberMe(!rememberMe)}
//             >
//               <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
//               <Text style={styles.checkboxText}>Remember Me</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity style={styles.registerButton} onPress={handleRegister} activeOpacity={0.7}>
//             <Text style={styles.registerButtonText}>Create Account</Text>
//           </TouchableOpacity>

//           <View style={styles.loginContainer}>
//             <Text style={styles.loginText}>Already have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//               <Text style={styles.loginLink}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollViewContent: {
//     flexGrow: 1,
//     backgroundColor: '#F8F9FB',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     backgroundColor: '#007AFF',
//     paddingTop: 60,
//     paddingBottom: 40,
//     paddingHorizontal: 24,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 36,
//     fontWeight: '900',
//     color: '#FFFFFF',
//     letterSpacing: 0.5,
//     fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto-Black',
//   },
//   formContainer: {
//     paddingHorizontal: 24,
//     paddingTop: 40,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#6B7280',
//     marginBottom: 8,
//     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
//   },
//   input: {
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 12,
//     padding: 16,
//     fontSize: 16,
//     color: '#1A1A1A',
//     marginBottom: 24,
//     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   passwordContainer: {
//     position: 'relative',
//   },
//   toggleButton: {
//     position: 'absolute',
//     right: 16,
//     top: 16,
//   },
//   toggleButtonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#007AFF',
//     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
//   },
//   optionsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 2,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     borderRadius: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 8,
//   },
//   checkboxChecked: {
//     backgroundColor: '#007AFF',
//     borderColor: '#007AFF',
//   },
//   checkboxText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#6B7280',
//     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
//   },
//   forgotPasswordText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#007AFF',
//     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
//   },
//   registerButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   registerButtonText: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     fontFamily: Platform.OS === 'ios' ? 'Avenir-Medium' : 'Roboto-Medium',
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 32,
//   },
//   loginText: {
//     fontSize: 16,
//     color: '#6B7280',
//     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
//   },
//   loginLink: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#007AFF',
//     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateName = (name) => name.trim().length >= 2;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!validateName(name)) {
      Alert.alert('Error', 'Name must be at least 2 characters long.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email.');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => navigation.replace('Main') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create Account</Text>
          <Text style={styles.headerSubtitle}>Join us and start your journey</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            placeholder="Enter your name"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="you@example.com"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="******"
              placeholderTextColor="#A0A0A0"
            />
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialIcons
                name={showPassword ? 'visibility' : 'visibility-off'}
                size={20}
                color="#007AFF"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.optionsRow}>
            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checked]} />
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
            activeOpacity={0.8}
          >
            <Text style={styles.registerText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.loginRow}>
            <Text style={styles.loginPrompt}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#F8F9FB',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#8E44AD',
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FFF',
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto-Black',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E0F0FF',
    marginTop: 6,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  form: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    marginBottom: 24,
    color: '#1A1A1A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  passwordContainer: {
    position: 'relative',
  },
  toggleButton: {
    position: 'absolute',
    right: 16,
    top: 18,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#007AFF',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#007AFF',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  forgotText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  registerText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '700',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  loginPrompt: {
    fontSize: 15,
    color: '#6B7280',
  },
  loginLink: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '700',
  },
});
