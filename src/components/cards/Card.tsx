import React from 'react'
import { View, Text } from 'react-native';

type Props = {
    title: string;
    uri: string;
}

const Card: React.FC<Props> = ({ title, uri }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default Card;