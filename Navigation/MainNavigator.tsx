import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUpUser from "../screens/User/Authorization/signUpUser";
import LoginUser from "../screens/User/Authorization/signInUser";
import AllStores from "../screens/User/Main/AllStores";
import OTPPage from "../screens/User/Authorization/otpPage";

const UserAuthStack = createNativeStackNavigator();
const VendorAuthStack = createNativeStackNavigator();
const UserMainStack = createNativeStackNavigator();


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

export const UserMainNavigator = () => {
    return (
        <UserMainStack.Navigator screenOptions={defaultNavOptions}>
                <UserMainStack.Screen name="allStores" component={AllStores}/>
        </UserMainStack.Navigator>
    )
}

export const VendorAuthNavigator = () => {
    return (
        <VendorAuthStack.Navigator>

        </VendorAuthStack.Navigator>
    );
}