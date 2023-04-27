import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const CategoryCard = ({ title, imgUrl }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: imgUrl }}
        style={{
          width: 80,
          height: 80,
          resizeMode: "cover",
          borderRadius: 10,
          marginRight: 1,
        }}
      />

      <Text style={styles.textImage}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 10,
    marginRight: 2,
    position: "relative",
  },
  textImage: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
  },
});
