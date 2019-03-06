import { createSwitchNavigator, createAppContainer } from 'react-navigation'

// import the different screens
import SignUp from './formSignUp'
import Login from './formLogin'
import Main from './main'

// create our app's navigation stack
const Routing = createSwitchNavigator(
  {
    Auth: {screen: SignUp},
    Login : {screen: Login},
    Main : {screen: Main}
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(Routing);

export default AppContainer
