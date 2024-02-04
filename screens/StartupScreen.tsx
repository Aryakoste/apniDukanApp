import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/auth-slice';

const StartupScreen = (props: any) => {

    const dispatch = useDispatch();
    
    const setLogin = () => {
        dispatch(authActions.setTryLogin({tryLogin: true}));
    }

    return <SafeAreaView style={styles.startUpContainer}>
        <View style={styles.mainContainer}>
        <Button mode='elevated' onPress={setLogin}>SignUp as User</Button>
        <Button mode='elevated' onPress={() => {
            setLogin();
            dispatch(authActions.setIsVendor({isVendor: true}))
        }}>SignUp as Vendor</Button>
        <Text style={styles.loginText}>Already a member ? <Text onPress={() => {
                setLogin();
            }}>Sign In</Text></Text>
        </View>
    </SafeAreaView>
}

export default StartupScreen;

const styles = StyleSheet.create({
    startUpContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgb(64, 78, 255)',
    },
    mainContainer: {
        paddingHorizontal: 10,
        gap: 18,
        paddingBottom: 10
    },
    loginText: {
        color: 'white',
        textAlign: 'center'
    }
});