import React, {Component} from 'react';
import { Text, View, Button,Image, TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class preguntaspsicologo extends Component{


    static navigationOptions ={
        title : 'Preguntas para docentes',
        headerStyle :{
            backgroundColor: 'green',
        },
        headerTitleStyle:{
            color:'#fff'
        }
    };
    constructor(){
        super()
        this.state ={
            data:require('../../docentes.json')
        }
    }
    render(){
        return(

            <FlatList
            data = {this.state.data}
            keyExtractor = {(x,i)=>i.toString()}
            renderItem = {({item})=>
            <Text style ={styles.pregunta}>
            {item.pregunta}
            </Text>}
            
            
            />
                
        );

    }
}


const styles = StyleSheet.create({
    pregunta:{
        fontWeight: 'bold',
        marginTop:30,
        marginLeft: 20
    }
})