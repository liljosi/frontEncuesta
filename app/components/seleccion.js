import React, {Component} from 'react';
import { Text, View, Button,Image, TouchableOpacity,ScrollView,AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class seleccion extends Component{
    static navigationOptions ={
        title : 'Selección de Personal',
        headerStyle :{
            backgroundColor: 'green',
        },
        headerTitleStyle:{
            color:'#fff'
        }
    };
    constructor(props){
        super(props)
    }
    
    render(){
        const {navigate} = this.props.navigation;

        return(
        <ScrollView>
          <View style={{backgroundColor:'lightgrey'}}>
          <View style ={{alignItems:'center'}} >
          <TouchableOpacity onPress={()=>navigate('PreguntasDirector')}> 
              <Image source = {require('../images/director.png')}  />
          </TouchableOpacity>
            </View>
            <View style ={{alignItems:'center',backgroundColor:'grey'}}>
            <TouchableOpacity onPress={()=>navigate('PreguntasPsicologo')}>
              <Image source = {require('../images/psicologo.png')} />
            </TouchableOpacity>
            </View>

            <View style ={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigate('PreguntasNutriologo')} >
                <Image source = {require('../images/nutriologo.png')}/>
            </TouchableOpacity>
            </View>
          </View>

         </ScrollView> 

          
        );
    }

}







