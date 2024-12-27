import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CARTRIDGE KINGS</Text>
        <View style={styles.containerSearch}>
          <TextInput style={styles.searchBar} placeholder="SEARCH" />
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartText}>CART (1)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.nav}>
        <Text style={styles.navItem}>HOME</Text>
        <Text style={styles.navItem}>INK CARTRIDGES</Text>
        <Text style={styles.navItem}>TONER CARTRIDGES</Text>
        <Text style={styles.navItem}>CONTACT US</Text>
        <Text style={styles.navItem}>LOGIN / REGISTER</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
        </Text>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>3-Step Easy Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtonOff}>
            <Text style={styles.optionButtonOffText}>Search by Serial Number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.dropdown}
            placeholder="1. Printer Brand"
          />
          <TextInput
            style={styles.dropdown}
            placeholder="2. Printer Series"
          />
          <TextInput
            style={styles.dropdown}
            placeholder="3. Printer Model"
          />
          <TouchableOpacity style={styles.findButton}>
            <Text style={styles.findButtonText}>FIND CARTRIDGES</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>FEATURED PRODUCTS</Text>
        <View style={styles.products}>
          <View style={styles.product}>
            <Image
              style={styles.productImage}
              source={{
                uri: "https://via.placeholder.com/150",
              }}
            />
            <Text style={styles.productName}>HP 62 Black Ink Cartridge</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$9.49</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.product}>
            <Image
              style={styles.productImage}
              source={{
                uri: "https://via.placeholder.com/150",
              }}
            />
            <Text style={styles.productName}>Canon MF-3110 Toner</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$36.45</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.product}>
            <Image
              style={styles.productImage}
              source={{
                uri: "https://via.placeholder.com/150",
              }}
            />
            <Text style={styles.productName}>Canon MF-3110 Toner</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$36.45</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 260,
    paddingVertical: 24,
    backgroundColor: "#ffffff",
  },
  containerSearch: {
    flexDirection: "row",
    marginLeft: "auto"
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 0,
    padding: 5,
    maxWidth: 280
  },
  cartButton: {
    paddingVertical: 5,
    paddingHorizontal: 24,
    backgroundColor: "#ff9800",
    borderRadius: 0,
  },
  cartText: {
    color: "#fff",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#007bff",
    paddingVertical: 10,
    marginHorizontal: 260,
    marginBottom: 24
  },
  navItem: {
    color: "#fff",
    fontSize: 14,
  },
  banner: {
    padding: 20,
    paddingTop: 48,
    paddingBottom: 96,
    backgroundColor: "#ff9800",
    alignItems: "center",
  },
  bannerText: {
    fontSize: 32.5,
    textAlign: "center",
    marginBottom: 10,
    color: "#fff"
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#007bff",
    width: 720
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    paddingVertical: 24
  },
  dropdown: {
    width: "22%",
    margin: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 0,
    padding: 6,
  },
  optionButton: {
    width: "50%",
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 0,
  },
  optionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  optionButtonOff: {
    width: "50%",
    backgroundColor: "#ccc",
    paddingVertical: 12,
    borderRadius: 0,
  },
  optionButtonOffText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  findButton: {
    backgroundColor: "#ff9800",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 0,
    marginLeft: 5,
  },
  findButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  featured: {
    marginTop: 48,
    alignItems: "center",
  },
  featuredTitle: {
    fontSize: 22,
    marginBottom: 16,
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: 720
  },
  product: {
    width: "30%",
    backgroundColor: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
  productName: {
    width: "100%",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  priceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#ff9800",
  },
  addButton: {
    backgroundColor: "#ff9800",
    paddingVertical: 6,
    paddingHorizontal: 12
  },
  addButtonText: {
    color: "#fff",
    fontSize: 10
  },
});

export default App;
