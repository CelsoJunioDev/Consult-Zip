import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

export default function Header (){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>ViaCEP</Text>
            <Text style={styles.subtitle}>Consulte CEPs de todo o Brasil</Text>
        </View>
    )
}

