import { useCallback, useReducer } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Input from '../../../components/UI/Input';
import { inputFields } from '../../../data/localData';


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state: any, action: any) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    const updatedErrors = {
      ...state.inputErrors,
      [action.input]: action.error
    }
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
      inputErrors: updatedErrors
    };
  }
  return state;
};


const SignUpUser = (props: any) => {

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    inputErrors: {
      
    },
    formIsValid: false
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier: string, inputValue: string, inputValidity: boolean, inputError: string) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
        error: inputError
      });
    },
    [dispatchFormState]
  );
    return (
        <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Sign Up For User Registration
      </Text>
      {inputFields.map((dat: any, index: number) => {
          return <Input 
                  id={dat.id}
                  label={dat.label}
                  fields={{...dat}}
                  validations={dat.validations}
                  onInputChange={inputChangeHandler}/>
      })}
      <Button mode='contained' style={styles.signUpButton} 
      onPress={() => props.navigation.navigate('loginUser')}>
          Sign Up
      </Button>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingHorizontal: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    formInputs: {
      marginTop: 20,
      width: '100%' 
    },
    header: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 10
    },
    signUpButton: {
      width: '100%',
      marginTop: 20
    }
  });

  export default SignUpUser;
