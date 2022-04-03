import React, { memo } from 'react'
import { Image, Text } from 'react-native'
import { useSelector } from 'react-redux';
import Photo from '../../components/Photo/Photo';
import { RootState } from '../../redux';

interface IProps {
  route: any;
}

const PhotoScreen: React.FC<IProps> = ({ route }) => {
  const { id } = route.params;
  const photos = useSelector((state: RootState) => state.photos);

  return <Photo photo={photos.get(id)} />
}

export default memo(PhotoScreen);
