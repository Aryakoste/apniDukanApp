import { View, Text, StyleSheet } from 'react-native';
import Card from '../../../components/UI/Card';
import { Button, TextInput } from 'react-native-paper';

const LoginUser = (props: any) => {
    return <View style={styles.container}>
        <Card style={styles.card}>
            <Text>Login as User</Text>
            <TextInput placeholder='Enter your email'>
            </TextInput>
            <TextInput placeholder='Enter your password'>
            </TextInput>
            <Button mode='contained'>
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
