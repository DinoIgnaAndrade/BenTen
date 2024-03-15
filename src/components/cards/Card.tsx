import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  artist: string;
  uri: string;
}

const Card: React.FC<Props> = ({ title, artist, uri }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.artitst}>{artist}</Text>
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'flex-start',
    padding:10,
  },
  title:{
    fontSize: 20,
  },
  artitst:{

  }
})