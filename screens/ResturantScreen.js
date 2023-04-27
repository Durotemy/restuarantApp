import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import LeftIcon from "react-native-vector-icons/AntDesign";
import Star from "react-native-vector-icons/MaterialIcons";
import Location from "react-native-vector-icons/SimpleLineIcons";

const ResturantScreen = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("Home");
  };
  const route = useRoute();
  const { id, title, address } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1325172440/photo/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-olives-capers-anchovies-and.jpg?b=1&s=170667a&w=0&k=20&c=0XEgTZ2pcp83v0rBgjtQ0bH9pXkxYDQgW7mrc5aNX30=",
            }}
            style={{ width: "100%", height: 300 }}
          />
          <TouchableOpacity
            onPress={handleBack}
            style={{
              position: "absolute",
              top: 32,
              left: 8,
              zIndex: 20,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <LeftIcon name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={styles.mainContainer}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nando's</Text>
            <View>
              <View style={styles.detailContainer}>
                <Text style={{ fontSize: 15, color: "grey" }}>
                  <Star name="star-border" color="green" size={15} /> 4.5
                </Text>
                <Text style={{ fontSize: 15, color: "grey", marginLeft: 10 }}>
                  <Location name="location-pin" color="green" size={15} />{" "}
                  Nearby - Clink Street 10km
                </Text>
              </View>
            </View>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatibus quibusdam
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: "95%",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
              borderColor: "grey",
              borderWidth: 2,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Location name="question" color="green" size={20} opacity={0.6} />
            <Text
              style={{
                flex: 1,
                marginLeft: 6,
                fontSize: 18,
              }}
            >
              Have a food allergy?
            </Text>
            <LeftIcon
              name="right"
              size={40}
              color="green"
              style={{
                marginBottom: 7,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "grey",
    padding: 4,
  },
  container: {
    position: "relative",
  },
  main: {
    backgroundColor: "white",
    shadowColor: "#000",
    borderRadius: 5,
    elevation: 20,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  mainContainer: {
    padding: 10,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    padding: 4,
    textAlign: "left",
    color: "grey",
  },
});

export default ResturantScreen;
