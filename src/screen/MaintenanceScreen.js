import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const MaintenanceScreen = ({ navigation }) => {
  const months = [
    { month: "April", status: "Validate", color: "#00D4D4" },
    { month: "March", status: "Pay", color: "#FF4D4D" },
    { month: "February", status: "Validate", color: "#00D4D4" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logoutText}>Log out</Text>
      <Text style={styles.title}>Maintenance</Text>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>Month</Text>
          <Text style={styles.headerCell}>Status</Text>
        </View>
        <ScrollView>
          {months.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.month}</Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: item.color }]}
                onPress={() => {
                  if (item.status === "Pay") {
                    navigation.navigate("Pay", { month: item.month });
                  } else {
                    alert(`${item.status} ${item.month}`);
                  }
                }}
              >
                <Text style={styles.buttonText}>{item.status}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7FAFF",
  },
  logoutText: {
    textAlign: "right",
    color: "#3E5061",
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#3E5061",
    marginBottom: 20,
    textAlign: "center",
  },
  table: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 8,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    padding: 10,
  },
  headerCell: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3E5061",
    flex: 1,
    textAlign: "center",
  },
  cell: {
    fontSize: 16,
    color: "#3E5061",
    flex: 1,
    textAlign: "center",
  },
  button: {
    flex: 1,
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default MaintenanceScreen;
