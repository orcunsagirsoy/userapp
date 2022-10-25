import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F0F0F0'},
  listContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 7,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: '#fc90af',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: 150,
    height: 30,
    margin: 6,
    borderWidth: 1,
    padding: 5,
  },
  inputText: {
    color: 'black',
    marginTop: 5,
    marginLeft: 5.2,
  },
});
