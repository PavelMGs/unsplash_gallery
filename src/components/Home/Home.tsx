import React, { memo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Photo } from "../../types/photo";
import Card from "../Card/Card";

interface IProps {
  photos: Photo[];
  handleLoadMore: () => void;
  handleNavigate: (url: string, params?: { [x: string]: string }) => void;
}

const Home: React.FC<IProps> = ({ photos, handleLoadMore, handleNavigate }) => {
  const handleCardClick = (id: string) => {
    handleNavigate("home", { id });
  };
  return (
    <View style={styles.root}>
      {photos.length ? (
        <FlatList
          data={photos}
          renderItem={({ item }) => (
            <Card data={item} handleCardClick={handleCardClick} />
          )}
          keyExtractor={(item) => item.id as string}
          showsVerticalScrollIndicator
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    padding: "5%",
  },
});

export default memo(Home);
