import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Calendar } from "react-native-calendars";

const ReserveScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const availableDates = {
    pool: ["2024-12-01", "2024-12-05", "2024-12-10"],
    park: ["2024-12-02", "2024-12-08", "2024-12-15"],
    eventHall: ["2024-12-03", "2024-12-07", "2024-12-20"],
  };

  const handleButtonPress = (option) => {
    setSelectedOption(option);
    setModalVisible(true);
  };

  const renderMarkedDates = () => {
    // Verificamos que selectedOption no sea null
    if (!selectedOption) return {};
    
    const dates = availableDates[selectedOption.toLowerCase()] || [];
    const markedDates = {};
    dates.forEach((date) => {
      markedDates[date] = { marked: true, dotColor: "blue" };
    });
    return markedDates;
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.logoutText}>Log out</Text>
      <Text style={styles.title}>Reserve</Text>

      {/* Botones */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleButtonPress("pool")}
      >
        <Text style={styles.buttonText}>Pool</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleButtonPress("park")}
      >
        <Text style={styles.buttonText}>Park</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleButtonPress("eventHall")}
      >
        <Text style={styles.buttonText}>Event hall</Text>
      </TouchableOpacity>

      {/* Modal del calendario */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a date for {selectedOption}</Text>
          <Calendar
            markedDates={renderMarkedDates()}
            onDayPress={(day) => {
              alert(`You selected ${day.dateString} for ${selectedOption}`);
              setModalVisible(false);
            }}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  optionButton: {
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    color: "#3E5061",
    fontSize: 18,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#3E5061",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ReserveScreen;
