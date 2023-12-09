import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/auth-slice';

const StartupScreen = (props: any) => {

    const dispatch = useDispatch();
    
    const setLogin = () => {
        dispatch(authActions.setTryLogin({tryLogin: true}));
    }

    return <SafeAreaView style={styles.startUpContainer}>
        <Button onPress={setLogin}>SignUp as User</Button>
        <Button onPress={() => {
            setLogin();
            dispatch(authActions.setIsVendor({isVendor: true}))
        }}>SignUp as Vendor</Button>
    </SafeAreaView>
}

export default StartupScreen;

const styles = StyleSheet.create({
    startUpContainer: {
        flex: 1,
        paddingTop: 50
    }
});