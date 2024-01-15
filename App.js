import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';

import LoginEkskul from './components/LoginEkskul';
import RegisterEkskul from './components/RegisterEkskul';
import HomeEkskul from './components/HomeEkskul';
import EditEkskul from './components/EditEkskul';
import TambahEkskul from './components/TambahEkskul';
import ListEkskul from './components/ListEkskul';
import DeleteEkskul from './components/DeleteEkskul';
import DetailEkskul from './components/DetailEkskul';





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='login' component={LoginEkskul} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='register' component={RegisterEkskul} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='home' component={HomeEkskul}></Stack.Screen>
        <Stack.Screen name='edit' component={EditEkskul}></Stack.Screen>
        <Stack.Screen name='tambah' component={TambahEkskul}></Stack.Screen>
        <Stack.Screen name='delete' component={DeleteEkskul}></Stack.Screen>
        <Stack.Screen name='list' component={ListEkskul}></Stack.Screen>
        <Stack.Screen name='detail' component={DetailEkskul}></Stack.Screen>

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;