import React, { useLayoutEffect,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  SearchIcon,
  LocationMarkerIcon,
  AdjustmentsIcon,
  ChevronDownIcon,
  MinusCircleIcon,
} from "react-native-heroicons/solid";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Entypo";
import Search from "react-native-vector-icons/FontAwesome";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [featureCategory, setFeatureCategory] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: "Glory",
    });
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            style={styles.headerImage}
          />
          <View style={styles.textt}>
            <Text style={styles.headerTextOne}>Deliver Now!</Text>
            <Text style={styles.headerTextTwo}>
              Current Location
              <Icon name="down" size={15} color="green" />{" "}
            </Text>
          </View>
          <Icons style={styles.userImage} name="user" size={30} color="blue" />
        </View>
        <View>
          <View style={{ marginLeft: 10, position: "relative" }}>
            <Search
              name="search"
              size={20}
              color="black"
              style={{ position: "absolute", zIndex: 20, top: 12, left: 5 }}
            />
            <TextInput
              placeholder="please search here!"
              style={{
                backgroundColor: "#f2f0f0",
                width: "95%",
                height: 40,
                marginTop: 0,
                marginBottom: 10,
                paddingLeft: 40,
                borderRadius: 5,
                zIndex: 10,
              }}
              keyboardType="default"
            />
          </View>
        </View>
        <ScrollView>
          <Categories />
          <FeaturedRow
            id="123"
            title="Featured"
            description="Paid placements from our partners"
          />
          <FeaturedRow
            id="1234"
            title="Tasty Discount"
            description="Paid placements from our partners"
          />
          <FeaturedRow
            id="12345"
            title="Offers near you"
            description="Paid placements from our partners"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    marginLeft: 2,
  },
  headerImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  header: {
    backgroundColor: "",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "stretch",
  },
  headerTextOne: {
    fontSize: 10,
    fontWeight: "bold",
  },
  headerTextTwo: {
    // color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  userImage: {
    // marginLeft: 80,
    marginTop: 10,
  },
  textt: {
    flex: 1,
  },
  background: {
    backgroundColor: "",
    height: "100%",
  },
});
