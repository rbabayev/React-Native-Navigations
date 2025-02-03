import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const BASE_API_URL = 'http://192.168.100.8:5001/cards'; // Backend API adresi

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cards, setCards] = useState([]);

  // 📌 API'den kartları çek
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    axios
      .get(BASE_API_URL)
      .then(response => setCards(response.data))
      .catch(error => console.error('Kartları alırken hata:', error));
  };

  // 📌 Yeni kart ekleme
  const addCard = () => {
    if (!title.trim() || !description.trim()) return;

    const newCard = {title, description};

    axios
      .post(BASE_API_URL, newCard)
      .then(response => {
        setCards([...cards, response.data]); // Yeni kartı listeye ekle
        setTitle('');
        setDescription(''); // Inputları temizle
      })
      .catch(error => console.error('Kart eklenirken hata:', error));
  };

  // 📌 Kart silme
  const deleteCard = id => {
    axios
      .delete(`${BASE_API_URL}/${id}`)
      .then(() => setCards(cards.filter(card => card._id !== id)))
      .catch(error => console.error('Kart silinirken hata:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kart Ekle</Text>

      {/* 📌 Başlık Girişi */}
      <TextInput
        style={styles.input}
        placeholder="Başlık girin..."
        value={title}
        onChangeText={setTitle}
      />

      {/* 📌 Açıklama Girişi */}
      <TextInput
        style={styles.input}
        placeholder="Açıklama girin..."
        value={description}
        onChangeText={setDescription}
      />

      {/* 📌 Ekleme Butonu */}
      <TouchableOpacity style={styles.button} onPress={addCard}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>

      {/* 📌 Kartları Listeleme */}
      <FlatList
        data={cards}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteCard(item._id)}>
                <Text style={styles.deleteButton}>X</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
});

export default Form;
