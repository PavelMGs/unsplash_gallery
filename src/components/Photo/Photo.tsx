import React, { memo } from 'react'
import { Image, StyleSheet, View } from 'react-native';
import { Photo as PhotoType } from '../../types/photo'

interface IProps {
  photo: PhotoType | undefined;
}

const Photo: React.FC<IProps> = ({ photo }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: photo?.urls.full }} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'center'
  }
})

export default memo(Photo);
