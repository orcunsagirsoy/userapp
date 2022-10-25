import React from 'react';
import {useDispatch} from 'react-redux';
import Users from '../../components/users/Users';
import userMiddleware from '../../middlewares/userMiddleware';
import {getUsersList} from '../../redux/action';

interface HomeScreenProps {
  navigation: any;
}
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const getUsers = async () => {
    const fetchedUsers = await userMiddleware.getUsers();
    dispatch(getUsersList(fetchedUsers.users));
  };

  React.useEffect(() => {
    getUsers();
  }, []);
  return <Users />;
};
export default HomeScreen;
