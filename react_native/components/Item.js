import React from "react";
import {
  SafeAreaView,
  Button,
  View,
  FlatList,
  StyleSheet,
  Text,
  Stack,
} from "react-native";
import Constants from "expo-constants";
export default function Item({ id, name, real_name, address, cnpj, navigation, handleChange }) {
  return (
    <View style={styles.item}>
      <View style={styles.data}>
          <Text style={styles.name}>Nome Fantasia: {name}</Text>
          <Text style={styles.name}>Razão Social: {real_name}</Text>
          <Text>Endereço: {address}</Text>
          <Text>CNPJ: {cnpj}</Text>
      </View>
      <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Editar Empresa"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Editar Empresa", {
                  id,
                  name,
                  real_name,
                  address,
                  cnpj,
                });
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Deletar empresa"
              onPress={() => {
                fetch("http://localhost:3001/companies/" + id, {
                  method: "delete",
                  headers: { "Content-Type": "application/json" },
                })
                  .then(function (response) {
                    return response.json();
                  })
                  .then(function (data) {
                    handleChange(id + "11");
                    console.log(data);
                  })
                  .catch(console.log);
              }}
            />
          </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flex:1,
    flexDirection: "col",
    backgroundColor: "#F2F3F4",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    maxWidth: 320,
  },
  buttons: {
    alignItems: 'center',
      flexDirection: 'row'
  },
  name: {
    fontSize: 16,
  },
  button: {
    padding: 4,
  },
});