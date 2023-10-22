import { StyleSheet, Text, View } from "react-native";
import React from "react";
import movieUrl from "../data/movieUrl";
import MovieRow from "./MovieRow";

const MovieRows = () => {
  const data = movieUrl;
  return (
    <View>
      {data.map((movie, index) => (
        <MovieRow title={movie.name} url={movie.url} key={index} />
      ))}
      <Text>MovieRows</Text>
    </View>
  );
};

export default MovieRows;

const styles = StyleSheet.create({});
