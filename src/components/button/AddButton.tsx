import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface AddButtonProps {
  onPress: () => void;
}
const Button: React.FC<AddButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.btnText}>Add User</Text>
    </TouchableOpacity>
  );
};

export default Button;
