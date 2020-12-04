import React from 'react'
import { StyleSheet } from 'react-native'



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#CAF0F8',
        alignItems: 'center'
    },
    inputView: {
        flexDirection: 'row',    
        justifyContent: 'space-between',   
        backgroundColor: '#ade8f4',
        width: '80%',
        borderRadius: 15,
        height: 48,
        paddingHorizontal: 15,
        marginTop: 40,
    },
    inputText:{
        color: '#03045E'
    },
    findButton:{
        justifyContent: 'center'
    },
    viewResults:{
        //alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#fff',
        width: '70%',
        height: '59%',
        padding: 15,
        borderRadius: 15
    },
    iconHomme: {
        alignSelf: 'center',
        marginTop: -30
    },
    cepText:{
        color: '#03045E',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    text:{
        color: '#03045E',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textResult:{
        color: '#03045E',
        fontSize: 16,
    },
    
})

export default styles;