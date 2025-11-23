import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { Picker } from '@react-native-picker/picker';

function OrganizationDetails() {
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
        <View>
            <TextInput placeholder="Company Name" 
            value={companyname} 
            onChangeText={setcompanyname}/>

            <Picker
                selectedValue={businesstype}
                onValueChange={(itemValue) => setbusinesstype(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Select ID Proof Type" value={null} />
                <Picker.Item label="Aadhaar" value="Aadhaar" />
                <Picker.Item label="PAN Card" value="PAN" />
                <Picker.Item label="Passport" value="Passport" />
            </Picker>

            <TextInput placeholder="CIN (Corporate Identification Number)" 
            value={cin} 
            onChangeText={setcin}/>

            <TextInput placeholder="GSTIN" 
            value={gstin} 
            onChangeText={setgstin}/>

            <TextInput placeholder="IEC Code" 
            value={ieccode} 
            onChangeText={setieccode}/>

            <TextInput placeholder="APEDA RCMC Number" 
            value={apedano} 
            onChangeText={setapedono}/>

            <TextInput placeholder="FSSAI License Number" 
            value={fssaino} 
            onChangeText={setfssaino}/>

            <TextInput placeholder="PAN" 
            value={pan} 
            onChangeText={setpan}/>

            <TextInput placeholder="Email" 
            value={email} 
            onChangeText={setEmail}/>

            <TextInput placeholder="Phone" 
            value={phone} 
            onChangeText={setPhone}
            keyboardType="numeric"/>

            <TextInput placeholder="Address" 
            value={address} 
            onChangeText={setaddress}/>

            <TextInput placeholder="State" 
            value={state} 
            onChangeText={setstate}/>

            <TextInput placeholder="District" 
            value={district} 
            onChangeText={setdistrict}/>

            <TextInput placeholder="Pincode" 
            value={pincode} 
            onChangeText={setpincode}
            keyboardType="numeric"/>

            <Button title="Next->"/>
        </View>
    )
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


export default OrganizationDetails;