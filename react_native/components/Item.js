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
          <Text style={styles.name}>Endereço: {address}</Text>
          <Text style={styles.name}>CNPJ: {cnpj}</Text>
      </View>
      <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Editar"
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
              color='#f05a5b'
              title="Excluir"
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
    backgroundColor: "#343434",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 13
  },
  name: {
    fontSize: 16,
    color:'#fff',
  },
  button: {
    padding: 4,
  },
});