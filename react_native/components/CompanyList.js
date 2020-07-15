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
import Item from "./Item";
import { useIsFocused } from "@react-navigation/native";
export default function CompanyList({ route, navigation, flag, handleChange }) {
  const [companies, setCompanies] = React.useState([]);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const obj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:3001/companies", obj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompanies(data);
      })
      .catch(console.log);
  }, [isFocused, flag]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.container}
        data={companies}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            real_name={item.real_name}
            address={item.address}
            cnpj={item.cnpj}
            navigation={navigation}
            route={route}
            handleChange={handleChange} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});
