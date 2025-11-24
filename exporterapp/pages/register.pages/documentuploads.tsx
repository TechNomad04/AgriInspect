import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from "react";

interface DocumentState {
  uri?: string;
  fileName?: string;
  type?: string;
}

interface Documents {
  iecCertificate: DocumentState[];
  gstCertificate: DocumentState[];
  apedaCertificate: DocumentState[];
  fssaiCertificate: DocumentState[];
  panCard: DocumentState[];
  bankCertificate: DocumentState[];
  aadhaarPan: DocumentState[];
  boardResolution: DocumentState[];
}

function DocumentUploads() {
  const [documents, setDocuments] = useState<Documents>({
    iecCertificate: [],
    gstCertificate: [],
    apedaCertificate: [],
    fssaiCertificate: [],
    panCard: [],
    bankCertificate: [],
    aadhaarPan: [],
    boardResolution: [],
  });

  const pickDocument = (documentKey: keyof Documents) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 2000,
        maxHeight: 2000,
        quality: 0.8,
        selectionLimit: 5, // Allow up to 5 images
      },
      (res) => {
        if (res.didCancel) return;

        if (res.errorCode) {
          Alert.alert("Error", res.errorMessage || "Image selection failed");
          return;
        }

        if (res.assets && res.assets.length > 0) {
          const newDocs = res.assets.map(asset => ({
            uri: asset.uri,
            fileName: asset.fileName,
            type: asset.type,
          }));
          
          setDocuments(prev => ({
            ...prev,
            [documentKey]: [...prev[documentKey], ...newDocs]
          }));
        }
      }
    );
  };

  const removeDocument = (documentKey: keyof Documents, index: number) => {
    setDocuments(prev => ({
      ...prev,
      [documentKey]: prev[documentKey].filter((_, i) => i !== index)
    }));
  };

  const renderDocumentItem = (
    key: keyof Documents,
    title: string,
    subtitle?: string,
    required: boolean = true
  ) => {
    const docs = documents[key] || [];
    
    return (
      <View style={styles.documentItem}>
        <View style={styles.documentHeader}>
          <Text style={styles.documentTitle}>
            {title} {required && <Text style={styles.required}>*</Text>}
          </Text>
          {subtitle && <Text style={styles.documentSubtitle}>{subtitle}</Text>}
        </View>
        
        <TouchableOpacity
          style={[styles.uploadButton, docs.length > 0 && styles.uploadedButton]}
          onPress={() => pickDocument(key)}
        >
          <Text style={[styles.uploadButtonText, docs.length > 0 && styles.uploadedButtonText]}>
            {docs.length > 0 ? `✓ ${docs.length} File(s) Uploaded` : 'Choose Files (Up to 5)'}
          </Text>
        </TouchableOpacity>
        
        {docs.length > 0 && (
          <View style={styles.filesContainer}>
            {docs.map((doc, index) => (
              <View key={index} style={styles.fileInfo}>
                {doc.uri && (
                  <Image source={{ uri: doc.uri }} style={styles.thumbnail} />
                )}
                <Text style={styles.fileName} numberOfLines={1}>
                  {doc.fileName || `Document ${index + 1}`}
                </Text>
                <TouchableOpacity 
                  onPress={() => removeDocument(key, index)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Upload Required Documents</Text>
        <Text style={styles.description}>
          Please upload clear copies of the following documents
        </Text>

        {renderDocumentItem('iecCertificate', 'IEC Certificate', 'DGFT')}
        {renderDocumentItem('gstCertificate', 'GST Certificate')}
        {renderDocumentItem('apedaCertificate', 'APEDA Certificate', 'For Agricultural Products')}
        {renderDocumentItem('fssaiCertificate', 'FSSAI Certificate', 'For Food Items')}
        {renderDocumentItem('panCard', 'Company PAN Card')}
        {renderDocumentItem('bankCertificate', 'Bank Certificate / Cancelled Cheque')}
        {renderDocumentItem('aadhaarPan', 'AADHAAR/PAN', 'Proprietor/Director')}
        {renderDocumentItem('boardResolution', 'Board Resolution / Authorization Letter', 'For Companies')}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            * All documents are required for verification
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  documentItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  documentHeader: {
    marginBottom: 12,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  documentSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  required: {
    color: '#e74c3c',
  },
  uploadButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  uploadedButton: {
    backgroundColor: '#27ae60',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  uploadedButtonText: {
    color: '#fff',
  },
  filesContainer: {
    marginTop: 12,
  },
  fileInfo: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 6,
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 12,
  },
  fileName: {
    flex: 1,
    fontSize: 13,
    color: '#666',
  },
  removeButton: {
    padding: 4,
    marginLeft: 8,
  },
  removeButtonText: {
    color: '#e74c3c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default DocumentUploads;