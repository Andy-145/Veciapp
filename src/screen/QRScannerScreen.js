import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function QRScannerScreen({ navigation }) {
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState(null);

  const handleBarCodeScanned = ({ data }) => {
    try {
      const parsedData = JSON.parse(data); // Supone que el QR contiene un JSON con los datos
      setQrData(parsedData);
      setScanned(true);
      Alert.alert("Acceso permitido", "QR escaneado correctamente");
    } catch (error) {
      Alert.alert("Error", "El código QR no contiene datos válidos");
    }
  };

  return (
    <View style={styles.container}>
      {!scanned ? (
        <>
          <Text style={styles.title}>Escanear QR</Text>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </>
      ) : (
        <View style={styles.dataContainer}>
          <Text style={styles.label}>Datos leídos del QR:</Text>
          <Text style={styles.text}>Nombre: {qrData?.name || "No disponible"}</Text>
          <Text style={styles.text}>
            Fecha de inicio: {qrData?.startDate || "No disponible"}
          </Text>
          <Text style={styles.text}>
            Fecha de fin: {qrData?.endDate || "No disponible"}
          </Text>
          <Text style={styles.text}>
            Tipo de visita: {qrData?.typeOfVisit || "No disponible"}
          </Text>
          <Text style={styles.text}>Nota: {qrData?.note || "No disponible"}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setScanned(false);
              setQrData(null);
            }}
          >
            <Text style={styles.buttonText}>Escanear otro QR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dataContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#3a5a9f",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default QRScannerScreen;
