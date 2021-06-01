import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function({route, navigation}:any){
    const yearOfBirth = Number(route.params.yearOfBirth)
    const gender = route.params.gender

    const curretDate = new Date()
    const age = curretDate.getFullYear() - yearOfBirth

    function loadMaleImage(age:any){
        if (age >= 0 && age <= 10){
            return <Image source={require(`../assets/images/foto-bebe-m.png`)} />
        } else if (age <= 21){
            return <Image source={require(`../assets/images/foto-jovem-m.png`)} />
        } else if (age <= 61){
            return <Image source={require(`../assets/images/foto-adulto-m.png`)} />
        } else{
            return <Image source={require(`../assets/images/foto-idoso-m.png`)} />
        }
    }

    function loadFemaleImage(age:any){
        if (age >= 0 && age <= 10){
            return <Image source={require(`../assets/images/foto-bebe-f.png`)} />
        } else if (age <= 21){
            return <Image source={require(`../assets/images/foto-jovem-f.png`)} />
        } else if (age <= 61){
            return <Image source={require(`../assets/images/foto-adulto-f.png`)} />
        } else{
            return <Image source={require(`../assets/images/foto-idoso-f.png`)} />
        }
    }

    function responseMessage(gender:any, age:any) {
        if (gender == 'masculino'){
            return(
                <View>
                    <Text style={{
                        textAlign: 'center',
                        marginBottom: 15,
                        fontSize: 20
                    }}>
                        Homem de {age} anos
                    </Text>
                    {loadMaleImage(age)}
                </View>
            )
        } else{
            return(
                <View>
                    <Text style={{
                        textAlign: 'center',
                        marginBottom: 15,
                        fontSize: 20
                    }}>
                        Mulher de {age} anos
                    </Text>
                    {loadFemaleImage(age)}
                </View>
            )
        }
    }

    return(
        <View style={styles.conteiner}>
            <View>
                {responseMessage(gender, age)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})