export const stores = [{
  
}];

export const inputFields = [
    {
      id: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      validations: [{
        type: 'email'
      }],
      keyboardType: 'email-address',
    },
    {
      id: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      validations: [{
        type: 'minLength',
        number: 20
      }], 
      keyboardType: 'default',
      secureTextEntry: true
    },
    {
      id: 'firstname',
      label: 'First Name',
      placeholder: 'Enter your first name',
      validations: [{
        type: 'customValidation',
      }],
      keyboardType: 'default'
    },
    {
      id: 'lastname',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      validations: [{
        type: 'customValidation',
      }],
      keyboardType: 'default'
    },
    {
      id: 'phonenumber',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
      validations: [{
        type: 'customValidation',
      }],
      keyboardType: 'numeric'
    },
  ];