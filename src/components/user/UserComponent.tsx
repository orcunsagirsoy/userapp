import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

interface UserComponentProps {
  id: string;
  image: string;
  age: string;
  name: string;
}

const UserComponent: React.FC<UserComponentProps> = ({
  id,
  image,
  name,
  age,
}) => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const userList = useSelector(state => (state as any).list.users);

  const handleUserClicked = (id: string) => {
    navigation.navigate('User' as never, {userId: id} as never);
  };

  const handleClose = () => {
    userList.filter((user: {id: string}) => user?.id != id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleUserClicked(id)}
        activeOpacity={0.8}
        style={[styles.itemContainer, {height: height * 0.32}]}>
        <TouchableOpacity
          onPress={handleClose}
          style={styles.closeBtnContainer}>
          <Text style={styles.closeBtnText}>X</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{uri: image}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.textName}>{name} - </Text>
          <Text style={[styles.textAge]}>{age}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default UserComponent;
