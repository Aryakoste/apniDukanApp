import { View, StyleSheet, Modal, Animated, Dimensions, TouchableWithoutFeedback, Text } from 'react-native';
import { Button, TextInput, Card, Divider } from 'react-native-paper';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const AllStores = (props: any) => {

    const [visible, setVisible] = React.useState(false);
    const [storeName, setStoreName] = React.useState('');
    const backdropOpacity = React.useState(new Animated.Value(0))[0];
    const modalTranslateY = React.useState(new Animated.Value(height))[0];

    React.useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(backdropOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(modalTranslateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(backdropOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(modalTranslateY, {
                    toValue: height,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible, backdropOpacity, modalTranslateY]);

    React.useEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Manage Stores',
            headerRight: () => (
                <Button onPress={() => {
                    showModal();
                }}>
                    <AntDesign name='plus' size={24} color='white'></AntDesign>
                </Button>
            )
        });
    }, []);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return <View style={styles.mainContainer}>
        <Modal
            visible={visible}
            transparent={true}
            animationType="none"
            onRequestClose={hideModal}
        >
            <TouchableWithoutFeedback onPress={hideModal}>
                <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]}>
                    <TouchableWithoutFeedback>
                        <Animated.View
                            style={[
                                styles.modalContent,
                                { transform: [{ translateY: modalTranslateY }] },
                            ]}
                        >
                            <Text style={styles.modalHeader}>Add Store</Text>
                            <View style={styles.modalInnerContent}>
                            <TextInput onChangeText={setStoreName} value={storeName} placeholder='Enter your store name' label="Store Name" mode='outlined'>

                            </TextInput>
                            <TextInput placeholder='Enter your store location' label='Store Location' mode='outlined'>

                            </TextInput>
                            </View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </TouchableWithoutFeedback>
        </Modal>
        <View>
            <Card style={styles.storeCard}>
                <Card.Cover source={require('../../../assets/store.jpg')}></Card.Cover>
                <Card.Title title="First Store" subtitle="Vegetable Store"></Card.Title>
                <Card.Actions>
                    <Button>Delete</Button>
                    <Button>Select</Button>
                </Card.Actions>
            </Card>
            <Divider></Divider>
        </View>
    </View>
}

export default AllStores;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 15
    },
    storeCard: {
        marginBottom: 25,
        width: '100%'
    },
    modalHeader: {
        padding: 20,
        fontSize: 23,
        backgroundColor: 'rgb(0, 111, 230)',
        color: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    modalInnerContent: {
        padding: 18,
        gap: 15
    },  
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
        maxHeight: '80%',
    },
});