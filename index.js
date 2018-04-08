import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput, Button,StyleSheet,ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Seleccion from './app/components/seleccion';

export default class encuesta extends Component{
    static navigationOptions ={
        title : 'Inicio',
        headerStyle :{
            backgroundColor: '#212121',
        },
        headerTitleStyle:{
            color:'#fff'
        }
    };
    constructor(){
        super()
        this.state = {
            text : 'placeholder'
        }
        
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView>
            <Text style = {styles.title}>
            
                Información de la escuela
            </Text>
                <View style ={styles.container}>

                        <Text style ={styles.activeTitle}>Nombre de Escuela: </Text>
                    
                                <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>CCT: </Text>
                    
                    <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Director/A: </Text>
                    
                    <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Corrreo Electrónico: </Text>
                    
                    <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Teléfono: </Text>
                    
                    <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Grado Escolar: </Text>
                    
                    <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Ciclo Escolar : </Text>
                    
                    <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Tiempo: </Text>
                    
                    <TextInput
                            style={{height: 40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                </View>

                
                            <Text style = {styles.title}>
            
                            Domicilio de la escuela
                             </Text>
             <View style ={styles.containerTwo}>            
                    <Text style ={styles.activeTitle}>Calle: </Text>

                    <TextInput
                        style={{height: 40}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />

                    <Text style ={styles.activeTitle}>Colonia: </Text>

                    <TextInput
                    style={{height: 40}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    />

                    <Text style ={styles.activeTitle}>Municipio: </Text>

                        <TextInput
                        style={{height: 40}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Código Postal: </Text>

                        <TextInput
                        style={{height: 40}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        />

                        <Text style ={styles.activeTitle}>Localidad: </Text>

                        <TextInput
                        style={{height: 40}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        />
                    <Button
                    onPress={()=>navigate('Personnel')}
                    title="Siguiente"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                
                </View>
        </ScrollView>


        );
    }

}


const myscreens = StackNavigator({
    Home: {screen:encuesta},
    Personnel:{screen:Seleccion}
})

AppRegistry.registerComponent('Encuesta',()=>myscreens);

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'white',
      fontWeight: 'bold'
    },
    container:{
        backgroundColor:'#a7a7a7'
    },
    containerTwo:{
        backgroundColor:'#313131'
    }
  });
