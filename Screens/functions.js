



    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');
    let [cpass, setCpass] = useState('');
  
    export function onSingup (name, email, pass, cpass){
      if (name && email && pass && cpass)
        Alert.alert('Success', 'Registered', [{text: 'OK'}]);
    }
      
    export function onFailedSingup (name, email, pass, cpass){
        if (!name && !email && !pass && !cpass)
        Alert.alert('Error', 'All fields are required.', [{text: 'OK'}]);
    }

    export function onPasswordMatch (pass, cpass){
        if (pass == cpass)
        handleSuccessfulRegistartion(email, pass);
    }

    export function onPasswordNotMatch (pass, cpass){

        if (pass != cpass)
        Alert.alert('Error', 'Passwords do not match', [{text: 'OK'}]);

    }

    export function minPassword(pass) {

        if (pass.length < 6)
        Alert.alert('Error', 'Password is too short', [{text: 'OK'}]);
      
    }

    export function maxPassword(pass) {

        if (pass.length >= 16)
        Alert.alert('Error', 'Password is too long', [{text: 'OK'}]);
      
    }

    




    
    