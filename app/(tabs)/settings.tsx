import { HOME_USER } from "@/constants/data"
import images from "@/constants/images"
import "@/global.css"
import { styled } from "nativewind"
import { useState } from "react"
import { Image, ImageSourcePropType, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"

const SafeAreaView = styled(RNSafeAreaView)

interface SettingsItemProps {
  icon?: ImageSourcePropType
  text: string
  rightComponent?: React.ReactNode
  divider?: boolean
  onPress?: () => void
}

interface ToggleProps {
  isActive: boolean
  onToggle: () => void
}

const SettingsItem = ({ icon, text, rightComponent, divider = true, onPress }: SettingsItemProps) => {
  return (
    <>
      <Pressable onPress={onPress} className="settings-item">
        <View className="settings-item-left">
          {icon && <Image source={icon} className="settings-icon" />}
          <Text className="settings-item-text">{text}</Text>
        </View>
        {rightComponent}
      </Pressable>
      {divider && <View className="settings-item-divider" />}
    </>
  )
}

const Toggle = ({ isActive, onToggle }: ToggleProps) => {
  return (
    <Pressable onPress={onToggle} className={`settings-toggle ${isActive ? 'settings-toggle-active' : ''}`}>
      <View className={`settings-toggle-thumb ${isActive ? 'settings-toggle-thumb-active' : ''}`} />
    </Pressable>
  )
}

const Chevron = () => (
  <Text className="text-muted-foreground text-lg">›</Text>
)

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  const [biometricEnabled, setBiometricEnabled] = useState(false)

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="settings-title">Settings</Text>

        {/* Profile Card */}
        <View className="settings-profile-card">
          <Image source={images.avatar} className="settings-avatar" />
          <View className="settings-profile-info">
            <Text className="settings-profile-name">{HOME_USER.name}</Text>
            <Text className="settings-profile-email">mike.harry@email.com</Text>
          </View>
          <Pressable className="settings-edit-button">
            <Text className="text-primary text-lg">✏</Text>
          </Pressable>
        </View>

        {/* Account Section */}
        <View className="settings-section">
          <Text className="settings-section-title">Account</Text>
          <SettingsItem text="Profile" rightComponent={<Chevron />} />
          <SettingsItem text="Security" rightComponent={<Chevron />} />
          <SettingsItem text="Payment Methods" rightComponent={<Chevron />} />
        </View>

        {/* Preferences Section */}
        <View className="settings-section">
          <Text className="settings-section-title">Preferences</Text>
          <SettingsItem
            text="Notifications"
            rightComponent={
              <Toggle
                isActive={notificationsEnabled}
                onToggle={() => setNotificationsEnabled(!notificationsEnabled)}
              />
            }
          />
          <SettingsItem
            text="Dark Mode"
            rightComponent={
              <Toggle
                isActive={darkModeEnabled}
                onToggle={() => setDarkModeEnabled(!darkModeEnabled)}
              />
            }
            divider={false}
          />
        </View>

        {/* Security Section */}
        <View className="settings-section">
          <Text className="settings-section-title">Security</Text>
          <SettingsItem
            text="Biometric Login"
            rightComponent={
              <Toggle
                isActive={biometricEnabled}
                onToggle={() => setBiometricEnabled(!biometricEnabled)}
              />
            }
            divider={false}
          />
        </View>

        {/* Support Section */}
        <View className="settings-section">
          <Text className="settings-section-title">Support</Text>
          <SettingsItem text="Help Center" rightComponent={<Chevron />} />
          <SettingsItem text="Contact Us" rightComponent={<Chevron />} />
          <SettingsItem text="Privacy Policy" rightComponent={<Chevron />} />
          <SettingsItem
            text="Terms of Service"
            rightComponent={<Chevron />}
            divider={false}
          />
        </View>

        {/* Logout Button */}
        <Pressable className="settings-logout-button">
          <Text className="settings-logout-text">Log Out</Text>
        </Pressable>

        {/* Version */}
        <Text className="settings-version">Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings