import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import iconSearch from '../../assets/search.png';
import iconHome from '../../assets/home.png';

import api from '../../services/api';

export default function Home() {
  const [all, setAll] = useState([]);
  const [temCep, setTemCep] = useState(false);
  const [inputCep, setInputCep] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Digite um Cep para pesquisar"
          placeholderTextColor="#03045E"
          keyboardType="numeric"
          value={inputCep}
          onChangeText={(cep) => setInputCep(cep)}
        />

        <TouchableOpacity style={styles.findButton}>
          <Image source={iconSearch} width="60" height="60" />
        </TouchableOpacity>
      </View>

      {temCep ? (
        <View style={styles.viewResults}>
          <Image source={iconHome} style={styles.iconHomme} />
          <Text style={styles.cepText}>{all.cep}</Text>

          <Text style={styles.text}>Logradouro:</Text>
          <Text style={styles.textResult}>{all.logradouro}</Text>

          <Text style={styles.text}>Bairro:</Text>
          <Text style={styles.textResult}>{all.bairro}</Text>

          <Text style={styles.text}>Localidade:</Text>
          <Text style={styles.textResult}>{all.localidade}</Text>

          <Text style={styles.text}>UF:</Text>
          <Text style={styles.textResult}>{all.uf}</Text>
        </View>
      ) : (
        <View style={styles.viewResults}>
          <Image source={iconHome} style={styles.iconHomme} />
          <Text style={styles.cepText}>...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
