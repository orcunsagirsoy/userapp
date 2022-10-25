import React from 'react';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {User} from '../../models/user';
import {addToUsers} from '../../redux/action';
import AddButton from '../button/AddButton';
import UserComponent from '../user/UserComponent';
import {styles} from './styles';

const Users: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [newUser, setNewUser] = React.useState<User>();
  const [nameInput, setNameInput] = React.useState<string>();
  const [ageInput, setAgeInput] = React.useState<number>();
  const [urlInput, setUrlInput] = React.useState<string>();

  const userList = useSelector(state => (state as any).list.users);

  React.useEffect(() => {
    userList.unshift(newUser);
  }, [newUser]);

  const handleSaveClick = () => {
    dispatch(
      addToUsers({
        id: userList.length,
        firstName: nameInput!,
        age: ageInput!,
        image: urlInput!,
      }),
    );
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={true}
        style={styles.listContainer}
        data={userList}
        numColumns={2}
        renderItem={({item}) => (
          <UserComponent
            id={item.id}
            image={item.image}
            name={item.firstName}
            age={item.age}
          />
        )}
        keyExtractor={item => item.id}
      />
      {
        <View>
          <AddButton onPress={() => setModalVisible(true)} />
        </View>
      }
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={e => {
                    setNameInput(e);
                  }}
                  placeholder="first name"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={e => {
                    setAgeInput(e as unknown as number);
                  }}
                  placeholder="age"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={e => {
                    setUrlInput(e);
                  }}
                  placeholder="image url"
                />
              </SafeAreaView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleSaveClick}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default Users;
