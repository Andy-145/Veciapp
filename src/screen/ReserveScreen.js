import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const ReserveScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Log out */}
      <Text style={styles.logout}>Log out</Text>

      {/* Title */}
      <Text style={styles.title}>Reserve</Text>

      {/* Buttons for options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Pool</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Park</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Event hall</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.icon}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>💰</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>📅</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>🆘</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF", // Light blue background
    paddingHorizontal: 20,
  },
  logout: {
    textAlign: "right",
    fontSize: 16,
    color: "#3E5061",
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
    color: "#3E5061",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  optionButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#3E5061",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#C4C4C4",
  },
  icon: {
    fontSize: 24,
    color: "#3E5061",
  },
});

export default ReserveScreen;
