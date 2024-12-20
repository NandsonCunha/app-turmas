import React from "react";
import { View, Text, StyleSheet, Button,  Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    function navegaNovaTurma(){
        navigation.navigate('NovaTurma')
    }
    function navegaTurma(){
        navigation.navigate('Turma')
    }
    return (
        <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../../assets/Logo.png')}/>
                    <Text style={styles.title}>Turmas</Text>
                    <Text style={styles.subtitle}>Jogue com sua turma</Text>
                <View style={styles.butaoContainer}>
                    <TouchableOpacity style={styles.butao} onPress={navegaTurma}>
                        <Image style={styles.imgPre} source={require('../../../assets/iconPre.png')}/>
                        <Text style={styles.textBut}>Nome da Turma</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butao} onPress={navegaTurma}>
                        <Image style={styles.imgPre} source={require('../../../assets/iconPre.png')}/>
                        <Text style={styles.textBut}>Nome da Turma</Text>
                    </TouchableOpacity>
                </View>

            
            <TouchableOpacity style={styles.butaoDois} onPress={navegaNovaTurma}>
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
    tituloContainer:{
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
    },
    logo:{
        width: 31,
        height: 34,
        marginTop: 70
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
    butaoContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 300,
    },
    butao: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 300,
        height: 80,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#29292E',
    },
    imgPre:{
        padding: 10,
        width: 31,
        height: 22,
        resizeMode: 'contain',
    },
    textBut:{
        color: '#FFFFFF',
        fontSize: 18,
        marginLeft: 15,
    },
    butaoDois: {
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