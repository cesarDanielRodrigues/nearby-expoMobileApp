import { Stack } from "expo-router"
import { colors } from "@/styles/theme"

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik"

import { Loading } from "@/components/loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_400Regular,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.gray[100],
        },
      }}
    />
  )
}
