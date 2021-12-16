import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import {HeaderIconButton} from '../components/HeaderIconButton';
import { AuthContext } from "../contexts/AuthContext";
// import {Product} from '../components/Product';
// import {useGet} from '../hooks/useGet';
// import {HeaderIconsContainer} from '../components/HeaderIconsContainer';
import { ThemeContext } from "../contexts/ThemeContext";
import { HeaderIconsContainer } from "../components/HeaderIconsContainer";
import { HeaderIconButton } from "../components/HeaderIconButton";

export function ProductsListScreen({ navigation }) {
  const { logout } = React.useContext(AuthContext);
  const switchTheme = React.useContext(ThemeContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconsContainer>
          <HeaderIconButton
            name={"color-palette"}
            onPress={() => {
              // switchTheme();
            }}
          />
          <HeaderIconButton
            name={"log-out"}
            onPress={() => {
              logout();
            }}
          />
        </HeaderIconsContainer>
      ),
    });
  }, [navigation, logout, switchTheme]);
  // const products = useGet("/products");

  // function renderProduct({ item: product }) {
  //   return <Product product={product} />;
  // }

  return (
    // <FlatList
    //   contentContainerStyle={styles.productsListContainer}
    //   data={products}
    //   renderItem={renderProduct}
    //   keyExtractor={product => `${product.id}`}
    // />

    <View>
      <Text>ProductList Screen</Text>
    </View>
  );


}

const styles = StyleSheet.create({
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
