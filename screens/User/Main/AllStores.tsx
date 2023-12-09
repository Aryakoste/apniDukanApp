import {  View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Button, Text, TextInput, Modal } from 'react-native-paper';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';


const AllStores = (props: any) => {

    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Manage Stores',
            headerRight: () => (
                <Button onPress={() => {
                    setShowModal(true);
                }}>
                    <AntDesign name='plus' size={24} color='white'></AntDesign>
                </Button>
            )
        });
    }, []);

    const closeModal = () => {
        setShowModal(false)
    }
    return  <View style={styles.mainContainer}>
        <Modal visible={showModal} onDismiss={closeModal} style={styles.modalStyle}>
                <View style={styles.modalContent}>
                    <TextInput placeholder='Enter your store name' label="Store Name" mode='outlined'>

                    </TextInput>
                    <TextInput mode='outlined'>

                    </TextInput>    
          </View>
        </Modal>
        <Text>
            This is Stores Main Page
        </Text>
    </View>
}

export default AllStores;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    modalStyle: {
        position: 'absolute',
        flex: 1
    },
      modalContent: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20
      },
});