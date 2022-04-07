import React, {useState} from "react";

import{
	View,
	Text, 
	TextInput, 
	StyleSheet, 
	TouchableOpacity, 
	FlatList,
} from "react-native";

import Header from "../components/header";
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
    
  //Declaração de variaveis
    let [tarefa, setTarefa] = useState();
    let [tarefasAdd, setTarefasAdd] = useState([ ]);

    const dados = {
        id: Math.random(),
        nome: tarefa,
      };
  //Criando uma função para que as tarefas sejam adicionadas
  function addTarefa(){
    if(tarefa == ''){
        alert('Digite uma tarefa antes de tentar adiciona-la!')
       }else{
        setTarefasAdd([... tarefasAdd, dados]);
        setTarefa('');   
       }
    }

  //Criando uma função para deletar tarefas que foram adicionadas
  function delTarefa(index){
    let newTarefas = tarefasAdd.filter(item => item.id != index)
    setTarefasAdd(newTarefas);
    }

  //Criando uma função para editar tarefas que foram adicionadas
  function edTarefa(){
    
    }

    //Interface
    return(
        <View style={styles.container}>
            <Header />
      <TextInput 
            value={tarefa}
            style={styles.input} 
            placeholder="Digite sua tarefa:"
            placeholderTextColor="#FF2E63"
            onChangeText={text => setTarefa (text)}
            returnKeyType="go"
            />

      <TouchableOpacity style={styles.button} onPress={addTarefa}>
                <Text style={styles.textButton}>
                    Adicionar uma nova tarefa
                </Text>
            </TouchableOpacity>

      <Text style={styles.text}>
                <MaterialIcons name="format-list-bulleted" size={23} color="white"/> Tarefas Adicionadas 
      </Text>
      <FlatList
                data={tarefasAdd}
                keyExtractor={(item) => item.id}
                renderItem={(({item}) =>
                <View style={styles.button}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', width:300}}>
                        <Text style={styles.textButton}>{item.nome} </Text>
                    </View>
                    
                    <View style={{flexDirection:'row', width:300, justifyContent:'center'}}>
                        <TouchableOpacity style={styles.button} onPress={()=>delTarefa(item.id)}>
                            <Text style={styles.textButton}>
                            Deletar <MaterialIcons name="delete" size={23} color="white" />
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={()=>edTarefa()}>
                            <Text style={styles.textButton}>
                            Editar <MaterialIcons name="edit" size={23} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )}
            />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252A34',
      paddingVertical:70,
      paddingHorizontal:20,
      alignItems:'center',
    },
  
    subTitle:{
      color:'#08D9D6',
      fontSize:20,
      fontWeight:'bold',
      marginTop:10,
      marginBottom:5
    },
  
    text:{
      color:'#EAEAEA',
      fontSize:20,
      fontWeight:'bold',
      marginTop:10,
      marginBottom:5
    },
  
    input:{
      backgroundColor:'#1f1e25',
      color:'#FFF',
      fontSize:18,
      marginTop:30,
      borderRadius: 12,
      padding:15,
      width:350,
    },
  
    button:{
      alignItems:'center',
      backgroundColor:'#FF2E63',
      marginTop:20,
      borderRadius:12,
      padding:15,
      },
  
    textButton:{
      justifyContent:'center',
      textAlign:'center',
      color:'#EAEAEA',
      fontSize:17
      }
  });