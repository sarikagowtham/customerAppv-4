import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import ProductScreen from './ProductScreen';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Product')}
        />
      </View>
    );
  }
}

// export class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }
const Rootstack = createStackNavigator({
  Home: HomeScreen,
  Product: ProductScreen,
},
{
  initialRouteName: 'Home',
}

);


const AppContainer = createAppContainer(Rootstack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}