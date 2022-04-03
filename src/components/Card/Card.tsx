import React, { memo } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Photo } from '../../types/photo'

interface ICard {
  data: Photo;
  handleCardClick: (id: string) => void;
}

const Card: React.FC<ICard> = ({ data, handleCardClick }) => {

  return (
    <View
      style={styles.root}
      onTouchEnd={() => handleCardClick(data.id as string)}
    >
      <Image style={styles.image} source={{ uri: data.urls.small }} />
      <Text>Author: {data.user.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  description: {
    fontWeight: '700',
  }
})

export default memo(Card);
