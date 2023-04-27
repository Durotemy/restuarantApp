import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import ResturantsCard from "./ResturantsCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.featuredText}>{title}</Text>
        <Icon name="arrowright" color={"green"} size={15} />
      </View>
      <Text style={styles.featuredDescription}>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 10,
        }}
      >
        <ResturantsCard
          id={123}
          title={"Burger King"}
          genre={"Africania"}
          rating={4.5}
          address={"1234 Main Street"}
          imgUrl={
            "https://thumbs.dreamstime.com/b/lot-food-wooden-table-georgian-cuisine-top-view-flat-lay-khinkali-georgian-dishes-96049794.jpg"
          }
          dishes={"Burger, Fries, Shake"}
          long={-122.084}
          lat={37.422}
        />
        <ResturantsCard
          id={123}
          title={"Burger King"}
          genre={"Africania"}
          rating={4.5}
          address={"1234 Main Street"}
          imgUrl={
            "https://thumbs.dreamstime.com/b/lot-food-wooden-table-georgian-cuisine-top-view-flat-lay-khinkali-georgian-dishes-96049794.jpg"
          }
          dishes={"Burger, Fries, Shake"}
          long={-122.084}
          lat={37.422}
        />
        <ResturantsCard
          id={123}
          title={"Burger King"}
          genre={"Africania"}
          rating={4.5}
          address={"1234 Main Street"}
          imgUrl={
            "https://thumbs.dreamstime.com/b/lot-food-wooden-table-georgian-cuisine-top-view-flat-lay-khinkali-georgian-dishes-96049794.jpg"
          }
          dishes={"Burger, Fries, Shake"}
          long={-122.084}
          lat={37.422}
        />
        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 4,
    marginRight: 2,
    position: "relative",
  },
  featuredText: {
    fontWeight: "bold",
  },
  featuredDescription: {
    color: "grey",
    fontSize: 10,
    padding: 4,
  },
});
