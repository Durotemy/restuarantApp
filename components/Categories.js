import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import React from "react";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 1,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        title="testing1"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
        title="testing2"
      />
      <CategoryCard
        imgUrl="https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=OKXH55QwDa6L3cY2pTTz1DKVT2clqW3zcVaJVaU-N_U="
        title="testing3"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/pizza-salami-arugula-wooden-board-36924315.jpg"
        title="testing4"
      />
       <CategoryCard
        imgUrl="https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=OKXH55QwDa6L3cY2pTTz1DKVT2clqW3zcVaJVaU-N_U="
        title="testing3"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
        title="testing2"
      />
    </ScrollView>
  );
};
export default Categories;
