import { Link } from 'expo-router'
import React from 'react'
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignIn = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      Alert.alert('Success', 'Sign in functionality to be implemented')
    }, 1500)
  }

  return (
    <View className="auth-safe-area">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
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
            <Text className="auth-title">Welcome Back!</Text>
            <Text className="auth-subtitle">
              Sign in to manage your subscriptions and stay on top of your expenses
            </Text>
          </View>

          {/* Form Card */}
          <View className="auth-card">
            <View className="auth-form">
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
                    placeholder="Enter your password"
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

              {/* Sign In Button */}
              <TouchableOpacity
                className={`auth-button ${isLoading ? 'auth-button-disabled' : ''}`}
                onPress={handleSignIn}
                disabled={isLoading}
              >
                <Text className="auth-button-text">
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View className="auth-divider-row">
              <View className="auth-divider-line" />
              <Text className="auth-divider-text">or continue with</Text>
              <View className="auth-divider-line" />
            </View>

            {/* Social Sign In Options */}
            <View className="mt-4 gap-3">
              <TouchableOpacity className="auth-secondary-button">
                <Text className="auth-secondary-button-text">Continue with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="auth-secondary-button">
                <Text className="auth-secondary-button-text">Continue with Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Link */}
          <View className="auth-link-row">
            <Text className="auth-link-copy"> Don t have an account? </Text>
            <Link href="/(auth)/sign-up">
              <Text className="auth-link">Create Account</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn