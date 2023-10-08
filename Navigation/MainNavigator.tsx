import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUpUser from "../screens/User/Authorization/signUpUser";
import LoginUser from "../screens/User/Authorization/signInUser";

const UserAuthStack = createNativeStackNavigator();
const VendorAuthStack = createNativeStackNavigator();

export const UserAuthNavigator = () => {
    return (
        <UserAuthStack.Navigator initialRouteName="loginUser" screenOptions={{
            headerShown: false
        }}>
            <UserAuthStack.Screen name="loginUser" component={LoginUser}/>
            <UserAuthStack.Screen name="signUp" component={SignUpUser}/>
        </UserAuthStack.Navigator>        
    )
}

export const VendorAuthNavigator = () => {
    return (
        <VendorAuthStack.Navigator>

        </VendorAuthStack.Navigator>
    );
}