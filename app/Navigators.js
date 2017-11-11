import {StackNavigator} from 'react-navigation';
import StartScreen from './screens/StartScreen/index';

const MainStackNavigator = StackNavigator(
  {
    StartScreen: {
      screen: StartScreen,
    },
  },
  {
    mode: 'card',
    cardStyle: {backgroundColor: 'transparent'},
  },
);

export default MainStackNavigator;
