import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/auth-slice';

const StartupScreen = (props: any) => {

    const dispatch = useDispatch();
    
    const setLogin = () => {
        dispatch(authActions.setTryLogin({tryLogin: true}));
    }

    return <View>
        <Button onPress={setLogin}>SignUp as User</Button>
        <Button onPress={() => {
            setLogin();
            dispatch(authActions.setIsVendor({isVendor: true}))
        }}>SignUp as Vendor</Button>
    </View>
}

export default StartupScreen;