
import React, {useState } from 'react';
import {useWindowDimensions } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import {Review, Income, Expenses} from '../screens';

const Main = ({ navigation }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'review', title: 'Review' },
    { key: 'income', title: 'Income'},
    { key: 'expenses', title: 'Expenses'},
  ]

  const renderScene = SceneMap({
    review:()=><Review />,
    income: ()=><Income navigation={navigation}/>,
    expenses:()=> <Expenses navigation={navigation}/>,
  });

  return (
    <TabView
      renderTabBar={props => <TabBar {...props} indicatorStyle={{backgroundColor:"#fff"}} />}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}


export default Main;
