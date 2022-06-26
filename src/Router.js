import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './context/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import ExpenseCalculation from './pages/ExpenseCalculation';
import PayingCalculation from './pages/PayingCalculation';
import NewCategory from './pages/NewCategory';
import AccountArea from './pages/AccountArea';
import FinishPay from './pages/FinishPay';
import PayedPayments from './pages/PayedPayments';
import PayArea from './pages/PayArea';

const Router = () => {
  console.disableYellowBox = true;
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WelcomeScreen"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ExpenseCalculationScreen"
            component={ExpenseCalculation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PayingCalculationScreen"
            component={PayingCalculation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewCategoryScreen"
            component={NewCategory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AccountAreaScreen"
            component={AccountArea}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FinishPayScreen"
            component={FinishPay}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PayedPaymentsScreen"
            component={PayedPayments}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PayAreaScreen"
            component={PayArea}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
