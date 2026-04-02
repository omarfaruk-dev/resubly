import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import '@/global.css'
import Feather from '@expo/vector-icons/Feather';

const SignUp = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      Alert.alert('Success', 'Account creation logic triggered')
    }, 1500)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff9e3' }}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="auth-content">

            {/* Header: Logo mark centered */}
            <View className="auth-brand-block">
              <View className="auth-logo-wrap">
                <View className="auth-logo-mark">
                  <Text className="auth-logo-mark-text">R</Text>
                </View>
                <View>
                  <Text className="auth-wordmark">Resubly</Text>
                  <Text className="auth-wordmark-sub">Smart Billing</Text>
                </View>
              </View>
            </View>

            {/* Title Section */}
            <View className="mb-7">
              <Text className="auth-title">Create account</Text>
              <Text className="auth-subtitle">
                Sign up to start managing your subscriptions
              </Text>
            </View>

            {/* Registration form card */}
            <View className="auth-card">
              <View className="flex-row gap-3">
                <View className="auth-field flex-1">
                  <Text className="auth-label">First name</Text>
                  <TextInput
                    className="auth-input"
                    placeholder="John"
                    placeholderTextColor="rgba(8,17,38,0.35)"
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCapitalize="words"
                  />
                </View>
                <View className="auth-field flex-1">
                  <Text className="auth-label">Last name</Text>
                  <TextInput
                    className="auth-input"
                    placeholder="Doe"
                    placeholderTextColor="rgba(8,17,38,0.35)"
                    value={lastName}
                    onChangeText={setLastName}
                    autoCapitalize="words"
                  />
                </View>
              </View>

              <View className="auth-field">
                <Text className="auth-label">Email</Text>
                <TextInput
                  className="auth-input"
                  placeholder="name@example.com"
                  placeholderTextColor="rgba(8,17,38,0.35)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View className="auth-field">
                <Text className="auth-label">Password</Text>
                <View className="relative">
                  <TextInput
                    className="auth-input pr-12"
                    placeholder="••••••••"
                    placeholderTextColor="rgba(8,17,38,0.35)"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    className="absolute right-4 top-0 bottom-0 justify-center"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text className="opacity-40">{showPassword ? <Feather name="eye-off" size={20} color="black" /> : <Feather name="eye" size={20} color="black" />}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="auth-field">
                <Text className="auth-label">Confirm password</Text>
                <View className="relative">
                  <TextInput
                    className="auth-input pr-12"
                    placeholder="••••••••"
                    placeholderTextColor="rgba(8,17,38,0.35)"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity
                    className="absolute right-4 top-0 bottom-0 justify-center"
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Text className="opacity-40">{showConfirmPassword ? <Feather name="eye-off" size={20} color="black" /> : <Feather name="eye" size={20} color="black" />}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={handleSignUp}
                disabled={isLoading}
                activeOpacity={0.8}
                className={`auth-button ${isLoading ? 'opacity-60' : ''}`}
              >
                <Text className="auth-button-text">
                  {isLoading ? 'Creating...' : 'Create Account'}
                </Text>
              </TouchableOpacity>

              <View className="auth-link-row">
                <Text className="auth-link-copy">Already have an account? </Text>
                <Link href="/(auth)/sign-in" asChild>
                  <TouchableOpacity>
                    <Text className="auth-link">Sign in</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>

            <View className="auth-divider-row">
              <View className="auth-divider-line" />
              <Text className="auth-divider-text">Or continue with</Text>
              <View className="auth-divider-line" />
            </View>

            <View className="gap-3">
              <TouchableOpacity className="auth-secondary-button" activeOpacity={0.7}>
                <Text className="auth-secondary-button-text">Continue with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="auth-secondary-button" activeOpacity={0.7}>
                <Text className="auth-secondary-button-text">Continue with Apple</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUp