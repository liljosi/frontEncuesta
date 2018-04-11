import React, {Component} from 'react';
import { Text, View, Button,Image, TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class preguntasnutriologo extends Component{


    static navigationOptions ={
        title : 'Preguntas para el/a nutriologo/a',
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
            data: require('../../nutriologo.json')
        }
    }
    render(){
        return(
            
            <FlatList
            data = {this.state.data}
            keyExtractor = {(x,i)=>i.toString()}
            renderItem = {({item})=>
            <View>
            <TouchableOpacity>
            <Text style ={styles.pregunta}>
            {item.pregunta}
            </Text>
            </TouchableOpacity>
            </View>}
            
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