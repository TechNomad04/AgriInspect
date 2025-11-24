import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';

function UserAccount({navigation}:any) {
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

            <Text style={styles.title}>User Account Details</Text>

            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput
                placeholder='Phone Number'
                keyboardType='numeric'
                value={phone}
                onChangeText={setPhone}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput
                placeholder='Full Name'
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <Picker
                selectedValue={value}
                onValueChange={(itemValue) => setValue(itemValue)}
                style={styles.picker}
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
                placeholderTextColor="#999"
            />

            <Button title="Upload ID Proof (JPEG/PNG)" onPress={pickDocument} />

            {documentFile && (
                <Text style={styles.fileText}>Selected: {documentFile.fileName}</Text>
            )}

            <View style={styles.buttonContainer}>
                <Button title='Next ->' onPress={()=>navigation.navigate('OrganizationDetails')}/>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 14,
    marginTop: 12,
    borderRadius: 8,
    fontSize: 15,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  picker: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 12,
    borderRadius: 8,
    height: 50,
  },
  fileText: {
    marginTop: 12,
    fontSize: 14,
    color: "#27ae60",
    fontWeight: '600',
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#e8f8f0',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 20,
  },
});


export default UserAccount;