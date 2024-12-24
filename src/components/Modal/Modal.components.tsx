import React, {FC, useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Option {
  label: string;
  value: string;
}

interface DynamicModalProps {
  visible: boolean;
  title: string;
  options: Option[];
  onClose: () => void;
  onSelect: (value: string) => void;
}

const DynamicModal: FC<DynamicModalProps> = ({
  visible,
  title,
  options,
  onClose,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    options[0]?.value || '',
  );

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              style={styles.option}
              onPress={() => handleSelect(option.value)}>
              <Text style={styles.optionText}>{option.label}</Text>
              {selectedValue === option.value && (
                <Text style={styles.selectedIndicator}>●</Text>
              )}
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
  selectedIndicator: {
    color: 'orange',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DynamicModal;
