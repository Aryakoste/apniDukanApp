import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import SignUpUser from "../screens/User/Authorization/signUpUser";
import LoginUser from "../screens/User/Authorization/signInUser";
import AllStores from "../screens/User/Main/AllStores";
import OTPPage from "../screens/User/Authorization/otpPage";
import { Button, SafeAreaView, View } from "react-native";

const UserAuthStack = createNativeStackNavigator();
const VendorAuthStack = createNativeStackNavigator();
const UserMainStack = createNativeStackNavigator();
const StoreDrawer = createDrawerNavigator();


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: 'rgb(0, 111, 230)'
    },
    headerTintColor: 'white'
};

export const UserAuthNavigator = () => {
    return (
        <UserAuthStack.Navigator initialRouteName="loginUser" screenOptions={{
            headerShown: false
        }}>
            <UserAuthStack.Screen name="loginUser" component={LoginUser}/>
            <UserAuthStack.Screen name="signUp" component={SignUpUser}/>
            <UserAuthStack.Screen name="otpPage" component={OTPPage}/>
        </UserAuthStack.Navigator>        
    )
}

// export const UserMainNavigator = () => {
//     return (
//         <UserMainStack.Navigator screenOptions={defaultNavOptions}>
//                 <UserMainStack.Screen name="allStores" component={AllStores}/>
//         </UserMainStack.Navigator>
//     )
// }

export const StoreNavigator = () => {
  
    return (
      <StoreDrawer.Navigator
      screenOptions={defaultNavOptions}
        drawerContent={props => {
          return (
            <View style={{ flex: 1, paddingTop: 20 }}>
              <SafeAreaView>
                <DrawerItemList {...props} />
                <Button
                  title="Logout"
                  color={'blue'}
                //   onPress={() => {
                //     dispatch(authActions.logout());
                //     // props.navigation.navigate('Auth');
                //   }}
                />
              </SafeAreaView>
            </View>
          );
        }}
      >
        <StoreDrawer.Screen name="allStores" component={AllStores}/>
        {/* <StoreDrawer.Screen
          name="Products"
          component={LoginUser}
          options={{
            // drawerIcon: props => (
            //   <Ionicons
            //     name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            //     size={23}
            //     color={props.color}
            //   />
            // )
          }}
        /> */}
      </StoreDrawer.Navigator>
    );
  };
  

// export const VendorAuthNavigator = () => {
//     return (
//         <VendorAuthStack.Navigator>

//         </VendorAuthStack.Navigator>
//     );
// }