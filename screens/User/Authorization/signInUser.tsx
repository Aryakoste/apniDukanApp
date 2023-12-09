import { View, Text, StyleSheet } from 'react-native';
import Card from '../../../components/UI/Card';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/slices/auth-slice';

const LoginUser = (props: any) => {

    const dispatch = useDispatch();

    return <View style={styles.container}>
        <Card style={styles.card}>
            <Text>Login as User</Text>
            <TextInput placeholder='Enter your mobile number' mode='outlined' label="Mobile Number" 
            keyboardType="numeric"/>
            <Button mode='contained' onPress={() => {
                // dispatch(authActions.setIsAuth({isAuth: true}));
                props.navigation.navigate("otpPage");
            }}>
                Log In
            </Button>
            <Text>Not a memeber ? <Text onPress={() => {
                props.navigation.navigate('signUp');
            }}>Sign Up</Text></Text>
        </Card>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'blue'
    },
    card: {
        padding: 30,
        gap: 20,
    }
});

export default LoginUser;
