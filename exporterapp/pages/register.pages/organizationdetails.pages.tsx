import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';

function OrganizationDetails({navigation}:any) {
    const [companyname, setcompanyname] = useState('');
    const [businesstype, setbusinesstype] = useState('')
    const [cin, setcin] = useState('');
    const [gstin, setgstin] = useState('')
    const [ieccode, setieccode] = useState('')
    const [apedano, setapedono] = useState('')
    const [fssaino, setfssaino] = useState('')
    const [pan, setpan] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setaddress] = useState('')
    const [state, setstate] = useState('')
    const [district, setdistrict] = useState('')
    const [pincode,setpincode] = useState('')
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Organization Details</Text>
            
            <Text style={styles.sectionTitle}>Company Information</Text>
            
            <TextInput 
                placeholder="Company Name" 
                value={companyname} 
                onChangeText={setcompanyname}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <Picker
                selectedValue={businesstype}
                onValueChange={(itemValue) => setbusinesstype(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select Business Type" value={null} />
                <Picker.Item label="Proprietorship" value="Proprietorship" />
                <Picker.Item label="Partnership" value="Partnership" />
                <Picker.Item label="Pvt Ltd" value="PvtLtd" />
                <Picker.Item label="LLP" value="LLP" />
            </Picker>

            <TextInput 
                placeholder="CIN (Corporate Identification Number)" 
                value={cin} 
                onChangeText={setcin}
                style={styles.input}
                placeholderTextColor="#999"
                autoCapitalize="characters"
            />

            <Text style={styles.sectionTitle}>Registrations & Licenses</Text>

            <TextInput 
                placeholder="GSTIN" 
                value={gstin} 
                onChangeText={setgstin}
                style={styles.input}
                placeholderTextColor="#999"
                autoCapitalize="characters"
            />

            <TextInput 
                placeholder="IEC Code" 
                value={ieccode} 
                onChangeText={setieccode}
                style={styles.input}
                placeholderTextColor="#999"
                autoCapitalize="characters"
            />

            <TextInput 
                placeholder="APEDA RCMC Number" 
                value={apedano} 
                onChangeText={setapedono}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput 
                placeholder="FSSAI License Number" 
                value={fssaino} 
                onChangeText={setfssaino}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput 
                placeholder="PAN" 
                value={pan} 
                onChangeText={setpan}
                style={styles.input}
                placeholderTextColor="#999"
                autoCapitalize="characters"
                maxLength={10}
            />

            <Text style={styles.sectionTitle}>Contact Information</Text>

            <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput 
                placeholder="Phone" 
                value={phone} 
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput 
                placeholder="Address" 
                value={address} 
                onChangeText={setaddress}
                style={[styles.input, styles.textArea]}
                placeholderTextColor="#999"
                multiline
                numberOfLines={3}
            />

            <TextInput 
                placeholder="State" 
                value={state} 
                onChangeText={setstate}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput 
                placeholder="District" 
                value={district} 
                onChangeText={setdistrict}
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TextInput 
                placeholder="Pincode" 
                value={pincode} 
                onChangeText={setpincode}
                keyboardType="numeric"
                style={styles.input}
                placeholderTextColor="#999"
                maxLength={6}
            />

            <View style={styles.buttonContainer}>
                <Button title="Next →" onPress={()=>{navigation.navigate('DocumentUploads')}}/>
            </View>
        </ScrollView>
    )
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginTop: 16,
    marginBottom: 12,
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: 14,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 40,
  },
});


export default OrganizationDetails;