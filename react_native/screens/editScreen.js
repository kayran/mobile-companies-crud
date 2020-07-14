import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View } from 'react-native';
import CompanyListForm from '../components/CompanyForm';
import CompanyEditForm from '../components/CompanyEditForm';

export default function EditScreen({route, navigation}) {
  return (
    <View >
        <CompanyEditForm route={route} navigation={navigation}  />
    </View>
  );
}

