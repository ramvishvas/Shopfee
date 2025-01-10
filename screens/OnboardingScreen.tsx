import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <Image
        source={require("@/assets/images/brand/icon.png")} // Replace with your image path
        style={styles.image}
        resizeMode='contain'
      />

      {/* Title and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Choose and customize your Drinks</Text>
        <Text style={styles.description}>
          Customize your own drink exactly how you like it by adding any topping
          you like!!!
        </Text>
      </View>

      {/* Pagination and Next Button */}
      <View style={styles.bottomContainer}>
        {/* Pagination Dots */}
        <View style={styles.pagination}>
          <View style={[styles.dot, { backgroundColor: "#6D4C41" }]} />
          <View style={[styles.dot, { backgroundColor: "#D3D3D3" }]} />
          <View style={[styles.dot, { backgroundColor: "#D3D3D3" }]} />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  skipButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: "#6D4C41",
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "40%",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  bottomContainer: {
    width: "100%",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: "#6D4C41",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OnboardingScreen;
