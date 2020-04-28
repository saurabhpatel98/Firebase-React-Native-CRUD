import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
class App extends React.Component{
  state={
   text:"Loading",
   OverView:"aapde jyare aa run karsu tyare Render() call thase have rendrema state.text call thase but tyare text ni value loading chhe etle ee batavse pachhi chhele componentdidMount Call thase aama api through call thase data and setState la text ni value pachhi change thase etle Render pachhu call thase and eema state ni value have data ma name aavse"
 }
 componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then((responseJson)=> {
    console.log(responseJson)
    this.setState({
     text:responseJson[0].name
    })
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  }

render(){
  console.log("from Render()")
  
 return(
  <View style={styles.container}>
    <Text>
{this.state.OverView}
  </Text>
  <Text style={styles.TextStyle}>

OUTPUT is:::{this.state.text}
  </Text>
 </View>
 )}
 }


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle:{
    fontSize:25,
    textAlign:'center'
  }
});
