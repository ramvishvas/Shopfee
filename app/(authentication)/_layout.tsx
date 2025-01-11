import { Stack } from "expo-router";
import React from "react";

export default function AuthenticationLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen
        name='otp'
        options={{
          headerTitle: "Confirm OTP code",
        }}
      />
      <Stack.Screen
        name='create-password'
        options={{
          headerTitle: "Create a PIN",
        }}
      />
      <Stack.Screen
        name='confirm-password'
        options={{
          headerTitle: "Enter your PIN",
        }}
      />
    </Stack>
  );
}
