import { NavigationContainer } from '@react-navigation/native';
import { UserAuthNavigator } from '../Navigation/MainNavigator';
import { useSelector } from 'react-redux';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = () => {

    const isAuth = useSelector((state: any) => state.auth.isAuth)
    const tryLogin = useSelector((state: any) => state.auth.tryLogin)
    const isVendor = useSelector((state: any) => state.auth.isVendor)
    return <NavigationContainer>
        {console.log(isAuth, isVendor, tryLogin)}
        {!isAuth && !tryLogin && <StartupScreen />}
        {!isAuth && tryLogin && !isVendor && <UserAuthNavigator />}
    </NavigationContainer>
}

export default AppNavigator;