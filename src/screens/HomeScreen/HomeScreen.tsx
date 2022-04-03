import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../../API';
import Home from '../../components/Home/Home'
import { RootState } from '../../redux';
import { getPhotos } from '../../redux/actions/photos';

interface iProps {
  navigation: any;
}

const HomeScreen: React.FC<iProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photos)
  const [page, setPage] = useState(1)

  const handleLoadMore = () => {
    dispatch(getPhotos(page));
    setPage(page + 1)
  }

  const handleNavigate = (url: string, params: { [x: string]: string } = {}) => {
    navigation.navigate("Photo", params);
  }

  useEffect(() => {
    dispatch(getPhotos());
    setPage(page + 1);
    API.get({ endpoint: 'photos' })
  }, [])

  return (
    <Home
      photos={Array.from(photos, ([id, value]) => 
        ({ ...value, id }))}
      handleLoadMore={handleLoadMore}
      handleNavigate={handleNavigate}
    />
  )
}

export default memo(HomeScreen)