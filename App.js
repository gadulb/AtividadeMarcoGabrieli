import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá, seja bem vindo!</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esta é uma atividade realizada por Gabrieli nas aulas de aplicações web.</Text>
    </View>
  );
}

function ContatoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Você pode me contatar pelo GitHub @gadulb</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contato" component={ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}