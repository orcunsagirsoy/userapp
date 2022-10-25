import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
type UserScreenProps = {
  route: any;
};
const UserScreen: React.FC<UserScreenProps> = ({route}) => {
  const {userId} = route.params;
  const {height, width} = useWindowDimensions();
  const userList = useSelector(state => (state as any).list.users);

  const clickedUser = userList.find((user: {id: string}) => user.id === userId);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: width, height: height * 0.55}}
        source={{uri: clickedUser.image}}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.mainAttributesText}>
          First Name: {clickedUser.firstName}
        </Text>
        {clickedUser.lastName && (
          <Text style={styles.mainAttributesText}>
            Last Name: {clickedUser.lastName}
          </Text>
        )}
        <Text style={styles.mainAttributesText}>Age: {clickedUser.age}</Text>
        {clickedUser.company?.address?.address && (
          <Text style={styles.mainAttributesText}>
            Address: {clickedUser.company.address.address}
          </Text>
        )}
        {clickedUser.company?.address?.postalCode && (
          <Text style={styles.mainAttributesText}>
            Postal Code: {clickedUser.company.address.postalCode}
          </Text>
        )}
        {clickedUser.company?.address?.state && (
          <Text style={styles.mainAttributesText}>
            State: {clickedUser.company.address.state}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
