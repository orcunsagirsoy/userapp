import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#F0F0F0',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#00FFFF',
    borderWidth: 2,
    margin: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
  },
  textName: {
    color: '#fc90af',
  },
  textAge: {
    color: '#fc90af',
  },
  image: {
    height: 100,
    width: 100,
  },
  closeBtnContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#fc90af',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
  },
  closeBtnText: {
    color: 'white',
    fontSize: 15,
  },
});
