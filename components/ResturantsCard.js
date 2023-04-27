import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";
const ResturantsCard = ({
  id,
  title,
  genre,
  address,
  imgUrl,
  dishes,
  long,
  lat,
  description,
  price,
  rating,
  reviews,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Resturant")}
      style={{ marginRight: 15 }}
    >
      <View
        style={{
          borderRightRadius: 2,
          borderTopRightRadius: 2,
          borderLeftRadius: 2,
        }}
      >
        <Image
          source={{ uri: imgUrl }}
          style={{
            width: 200,
            height: 100,
            resizeMode: "cover",
            marginRight: 1,
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.imagedes}>
          <Icon name="star" size={20} color="green" />
          <Text>
            {rating}. {genre}
          </Text>
        </View>
        <View style={styles.imagedes}>
          <Icon name="location" size={20} />
          <Text>Nearby {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbdbaf",
    padding: 4,
    borderRadius: 5,
    marginRight: 2,
    bottom: 2,
  },
  text: {
    fontWeight: "bold",
    // paddingBottom: 15,
  },
  imagedes: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 7,
    paddingLeft: 1,
  },
});
