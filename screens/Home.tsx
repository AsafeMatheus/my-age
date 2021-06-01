import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Modal,
    Button
} from 'react-native'

export default function({navigation}:any){
    const [yearOfBirth, setYearOfBirth] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    return(
        <View style={styles.conteiner}>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalConteiner}>
                    <Text style={styles.modalText}>Por favor, digite o ano em que você nasceu</Text>
                    <Button
                        title='ok'
                        onPress={() => setModalVisible(false)}
                    />
                </View>
            </Modal>
            <Text style={styles.whiteText}>Ano de nascimento:</Text>
            <TextInput
                style={styles.inputBox}
                value={yearOfBirth}
                onChangeText={text => {
                    setYearOfBirth(text)
                }}
            />
            <View style={styles.rowView}>
                <TouchableOpacity style={styles.whiteBox}
                    onPress={() => {
                        if (yearOfBirth.length != 0){
                            navigation.navigate('Response', {
                                yearOfBirth: yearOfBirth,
                                gender: 'masculino'
                            })
                        }else{
                           setModalVisible(true)
                        }             
                    }}
                >
                    <Text style={styles.blueText}>Masculino</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.whiteBox}
                    onPress={() => {
                        if (yearOfBirth.length != 0){
                            navigation.navigate('Response', {
                                yearOfBirth: yearOfBirth,
                                gender: 'feminino'
                            })
                        }else{
                            setModalVisible(true)
                        }
                    }}
                >
                    <Text style={styles.blueText}>Feminino</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#317ae9'
    },
    whiteText:{
        color: 'white',
        fontSize: 25
    },
    blueText:{
        color: '#317ae9'
    },
    inputBox:{
        backgroundColor: 'white',
        width: '70%',
        height: '9%',
        marginVertical: 7,
        textAlign: 'center',
        borderRadius: 10
    },
    rowView:{
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    },
    whiteBox:{
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
        marginTop: 10
    },
    modalConteiner:{
        margin: 15,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    modalText:{
        marginBottom: 7
    }
})

