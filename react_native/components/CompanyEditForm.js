import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function CompanyEditForm({ route, navigation }) {

  const [id, setId] = React.useState(route.params.id);
  const [name, setName] = React.useState(route.params.name);
  const [cnpj, setCnpj] = React.useState(route.params.cnpj);
  const [address, setAddress] = React.useState(route.params.address);
  const [real_name, setRealName] = React.useState(route.params.real_name);


  async function handleSubmit(event) {
    event.preventDefault();

    const data = { id, name, real_name, address, cnpj };
    await fetch("http://localhost:3001/companies/"+id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(console.log);
  }
  return (
    <KeyboardAvoidingView
      enabled={Platform.OS == "ios"}
      behavior="padding"
      style={style.container}
    >
      <View style={style.form}>
        <Text style={style.label}>Nome Fantasia</Text>
        <TextInput
          style={style.input}
          placeholder="Título"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={style.label}>Razão Social</Text>
        <TextInput
          style={style.input}
          placeholder="Descrição"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={real_name}
          onChangeText={(text) => setRealName(text)}
        />
        <Text style={style.label}>Endereço</Text>
        <TextInput
          style={style.input}
          placeholder="Descrição"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Text style={style.label}>CNPJ</Text>
        <TextInput
          style={style.input}
          placeholder="Descrição"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
        />
        <TouchableOpacity onPress={handleSubmit} style={style.buttom}>
          <Text style={style.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },
  buttom: {
    height: 42,
    backgroundColor: "#2196f3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
