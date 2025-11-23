import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';

function UserAccount() {
    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [phone, setPhone] = useState('');
      const [fullName, setFullName] = useState('');
      const [idNumber, setIdNumber] = useState('');
      const [documentFile, setDocumentFile] = useState<any>(null);
    
      const [value, setValue] = useState(null);
    
      const pickDocument = () => {
        launchImageLibrary(
          {
            mediaType: 'photo',
            maxWidth: 2000,
            maxHeight: 2000,
            quality: 0.8,
            selectionLimit: 1,
          },
          (res) => {
            if (res.didCancel) return;
    
            if (res.errorCode) {
              Alert.alert("Error", res.errorMessage || "Image selection failed");
              return;
            }
    
            if (res.assets && res.assets.length > 0) {
              setDocumentFile(res.assets[0]);
            }
          }
        );
      };
    return (
        <View style={styles.container}>

            <Text>User Account details</Text>

            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <TextInput
                placeholder='Phone Number'
                keyboardType='numeric'
                value={phone}
                onChangeText={setPhone}
                style={styles.input}
            />

            <TextInput
                placeholder='Full Name'
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
            />

            <Picker
                selectedValue={value}
                onValueChange={(itemValue) => setValue(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Select ID Proof Type" value={null} />
                <Picker.Item label="Aadhaar" value="Aadhaar" />
                <Picker.Item label="PAN Card" value="PAN" />
                <Picker.Item label="Passport" value="Passport" />
            </Picker>

            <TextInput
                placeholder='ID Proof Number'
                value={idNumber}
                onChangeText={setIdNumber}
                style={styles.input}
            />

            <Button title="Upload ID Proof (JPEG/PNG)" onPress={pickDocument} />

            {documentFile && (
                <Text style={styles.fileText}>Selected: {documentFile.fileName}</Text>
            )}

            <Button title='Next ->' />

        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  fileText: {
    marginTop: 10,
    fontSize: 14,
    color: "green"
  }
});


export default UserAccount;