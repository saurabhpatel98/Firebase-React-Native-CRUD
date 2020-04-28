import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Button,Appbar } from 'react-native-paper';
import Displaylove from './Displaylove';
class App extends React.Component{
  state={
mname:'',
fname:'',
data:"Loading..."
   }
  submit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.mname}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "e3caf3b0bbmshc1ffc1d6990427bp1aa538jsn896638b949f6"
	}
}).then(data=>data.json())
.then(response => {
	console.log(response);
  this.setState({
    data:response
  })
})
.catch(err => {
	console.log(err);
});
  }

render(){
  console.log("from Render()");
  console.log("state is:",this.state)
  
 return(
  <View style={styles.container}>
  <Appbar.Header>
        <Appbar.Content
          title="Love Calculator"

          style={{alignItems:"center"}}
        />
        
      </Appbar.Header>
   <TextInput
        label='Male Name'
        value={this.state.fname}
        onChangeText={text => this.setState({ fname:text })}
      />
   <TextInput
        label='Female Name'
        value={this.state.mname}
        onChangeText={text => this.setState({ mname:text })}
      />
    <Button icon="home" mode="contained" onPress={this.submit.bind(this)} style={{margin:40}}>
    Calculate
  </Button>
      <Displaylove data={this.state.data}/>
 </View>
 )}
 }


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  
  },
  
});
