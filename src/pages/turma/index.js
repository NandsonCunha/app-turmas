import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Turma() {
    const navigation = useNavigation();

    function navegaTurma(){
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.imgs}>
                <TouchableOpacity onPress={navegaTurma}>
                    <Image  source={require('../../../assets/iconVol.png')}/>
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../../../assets/Logo.png')}/>
            </View>
            <Text style={styles.title}>Nome da Turma</Text>
            <Text style={styles.subtitle}>Adicione a galera e separe os times</Text>

            <TextInput style={styles.inputTxt} > 
                <Text style={styles.inputTxtDois}>Nome do Participante</Text>
            </TextInput>

            <View style={styles.times}>
                <View style={styles.timeA}>
                    <Text style={styles.time}>TIME-A</Text>
                </View>
                <View style={styles.timeB}>
                    <Text style={styles.time}>TIME-B</Text>
                </View>
            </View>
            <View style={styles.pessoas}>
                <View style={styles.pessoa}>
                    <Image source={require("../../../assets/person.png")}/>
                    <Text style={styles.time}>Rodrigo Gonçalves</Text>
                    <TouchableOpacity style={styles.x}>
                        <Image style={styles.imagex} source={require("../../../assets/iconX.png")}/>
                    </TouchableOpacity>
                </View>
                <View  style={styles.pessoa}>
                    <Image source={require("../../../assets/person.png")}/>
                    <Text style={styles.time}>Diego Fernandes</Text>
                    <TouchableOpacity style={styles.x}>
                        <Image style={styles.imagex} source={require("../../../assets/iconX.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            

            <TouchableOpacity style={styles.butaoDois} onPress={navegaTurma}>
                <Text style={styles.textButDois}>Nova Turma</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202024',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgs:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        width: '90%',
    },
    logo:{
        width: 31,
        height: 34,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#FFFFFF',
    },
    inputTxt:{
        width: 300,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#121214',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10,
        marginBottom: 10,
    },
    inputTxtDois:{
        color: '#7C7C8A',
        fontSize: 16,

    },
    times:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        width: 315,
    },
    timeA:{
        height: 30,
        width: 60,
        borderRadius: 5,
        borderColor: '#00B37E',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    timeB:{
        height: 30,
        width: 60,
        borderRadius: 5,
        borderColor: '#F9F9F9',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    time:{
        color: '#fff',
    },
    pessoas:{
        height: 200,
        width: 300,

    },
    pessoa:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#29292E',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
    },

    imagex:{
        width: 24,
        height: 24,
        marginLeft: 100,

    },
    butaoDois:{
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AA2834',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 40,
    },
    textButDois:{
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})