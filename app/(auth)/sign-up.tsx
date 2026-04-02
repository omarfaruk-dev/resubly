import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignUp = () => {
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
    
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters')
      return
    }
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      Alert.alert('Success', 'Sign up functionality to be implemented')
    }, 1500)
  }

  return (
    <View className="auth-safe-area">
      <ScrollView className="auth-scroll" showsVerticalScrollIndicator={false}>
        <View className="auth-content">
          {/* Brand Section */}
          <View className="auth-brand-block">
            <View className="auth-logo-wrap">
              <View className="auth-logo-mark">
                <Text className="auth-logo-mark-text">R</Text>
              </View>
              <Text className="auth-wordmark">Resubly</Text>
            </View>
            <Text className="auth-wordmark-sub">Subscription Manager</Text>
          </View>

          {/* Title Section */}
          <View className="mt-8 items-center">
            <Text className="auth-title">Create Account</Text>
            <Text className="auth-subtitle">
              Sign up to start managing your subscriptions and expenses efficiently
            </Text>
          </View>

          {/* Form Card */}
          <View className="auth-card">
            <View className="auth-form">
              {/* Name Fields */}
              <View className="flex-row gap-3">
                <View className="auth-field flex-1">
                  <Text className="auth-label">First Name</Text>
                  <TextInput
                    className="auth-input"
                    placeholder="First name"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCapitalize="words"
                    autoCorrect={false}
                  />
                </View>
                <View className="auth-field flex-1">
                  <Text className="auth-label">Last Name</Text>
                  <TextInput
                    className="auth-input"
                    placeholder="Last name"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    value={lastName}
                    onChangeText={setLastName}
                    autoCapitalize="words"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Email Field */}
              <View className="auth-field">
                <Text className="auth-label">Email Address</Text>
                <TextInput
                  className="auth-input"
                  placeholder="Enter your email"
                  placeholderTextColor="rgba(0, 0, 0, 0.4)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* Password Field */}
              <View className="auth-field">
                <Text className="auth-label">Password</Text>
                <View className="relative">
                  <TextInput
                    className="auth-input pr-12"
                    placeholder="Create a password"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text className="text-base font-sans-semibold text-muted-foreground">
                      {showPassword ? '👁' : '👁‍🗨'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Confirm Password Field */}
              <View className="auth-field">
                <Text className="auth-label">Confirm Password</Text>
                <View className="relative">
                  <TextInput
                    className="auth-input pr-12"
                    placeholder="Confirm your password"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Text className="text-base font-sans-semibold text-muted-foreground">
                      {showConfirmPassword ? '👁' : '👁‍🗨'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity
                className={`auth-button ${isLoading ? 'auth-button-disabled' : ''}`}
                onPress={handleSignUp}
                disabled={isLoading}
              >
                <Text className="auth-button-text">
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View className="auth-divider-row">
              <View className="auth-divider-line" />
              <Text className="auth-divider-text">or continue with</Text>
              <View className="auth-divider-line" />
            </View>

            {/* Social Sign Up Options */}
            <View className="mt-4 gap-3">
              <TouchableOpacity className="auth-secondary-button">
                <Text className="auth-secondary-button-text">Continue with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="auth-secondary-button">
                <Text className="auth-secondary-button-text">Continue with Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign In Link */}
          <View className="auth-link-row">
            <Text className="auth-link-copy">Already have an account? </Text>
            <Link href="/(auth)/sign-in">
              <Text className="auth-link">Sign In</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUp