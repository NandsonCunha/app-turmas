import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function novaTurma() {
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
            <Image style={styles.imgIconTra}  source={require('../../../assets/iconTra.png')}/>
            <Text style={styles.title}>Nova Turmas</Text>
            <Text style={styles.subtitle}>Crie uma Turma para adicionar pessoas</Text>
            <View style={styles.containerButao}>
                <TextInput style={styles.inputTxt} > 
                    <Text style={styles.inputTxtDois}>Nome da Turma</Text>
                </TextInput>
                <TouchableOpacity style={styles.butaoDois}>
                    <Text style={styles.textButDois}>Criar</Text>
                </TouchableOpacity>
            </View>
            
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
    imgIconTra:{
        marginTop: -200
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
    containerButao:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100
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
    butaoDois:{
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00875F',
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