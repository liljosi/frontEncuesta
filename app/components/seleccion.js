import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class seleccion extends Component{
    static navigationOptions ={
        title : 'Selección de Personal',
        headerStyle :{
            backgroundColor: '#212121',
        },
        headerTitleStyle:{
            color:'#fff'
        }
    };
    constructor(props){
        super(props)
    }
    render(){
        return(
          <View>
              <Text>Seccion donde eliges personal</Text>
          </View>
        );
    }

}

