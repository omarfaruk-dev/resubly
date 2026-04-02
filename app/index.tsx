// import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
// import React from 'react'
// import { router } from 'expo-router'
// import images from '@/constants/images'
// import "@/global.css"
// import { StatusBar } from 'expo-status-bar'

// const Onboarding = () => {
//   return (
//     <SafeAreaView  className="flex-1 bg-accent">
//       <StatusBar style="light" />
      
//       {/* Pattern Background Section */}
//       <View className="flex-[0.6] items-center justify-center pt-10">
//         <Image 
//           source={images.splashPattern} 
//           className="w-full h-full" 
//           resizeMode="contain"
//         />
//       </View>

//       {/* Content Section */}
//       <View className="flex-[0.4] px-8 items-center justify-center">
//         <View className="mb-10 items-center">
//           <Text className="text-white text-4xl font-sans-bold text-center leading-tight">
//             Gain Financial Clarity
//           </Text>
//           <Text className="text-white/90 text-lg font-sans-medium text-center mt-3">
//             Track, analyze and cancel with ease
//           </Text>
//         </View>

//         {/* Action Button */}
//         <TouchableOpacity 
//           activeOpacity={0.8}
//           onPress={() => router.push('/(auth)/sign-in')}
//           className="bg-white w-full py-4 rounded-full shadow-lg items-center"
//         >
//           <Text className="text-[#081126] text-xl font-sans-bold">
//             Get Started
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default Onboarding
