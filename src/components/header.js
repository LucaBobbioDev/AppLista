import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Button() {
    
    //Arrow function que altera a saudação conforme a hora
    let [saudacao, setSaudacao] = useState();
    useEffect(()=>{
        const currentHour = new Date().getHours();
            if(currentHour < 12){
                setSaudacao("Bom dia!");
            }else if(currentHour >= 12 && currentHour <18) {
                setSaudacao("Boa tarde!");
            }else{
                setSaudacao("Boa noite!");
            }
        },[]);

    //Cabeçalho
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wingman
                <Image style={styles.logo} source={require('../assets/wingman_logo.png')} />
             </Text>

            <Text style={styles.subTitle}>{saudacao} Seja bem-vindo ao Wingman - Aplicativo de gerência de tarefas</Text>
        </View>
    );
   }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252A34',
        paddingVertical:5,
        alignItems:'center',
      },
    title:{
        color:'#08D9D6',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
      },
    
      logo:{
        height:28,
        width: 47
      },
    
      subTitle:{
        color:'#08D9D6',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
      },
    
})