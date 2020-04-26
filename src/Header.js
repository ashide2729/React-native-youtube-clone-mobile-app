import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoTitle}>
          <TouchableOpacity>
            <MCIcon
              style={{marginLeft: 5, color: "red"}}
              name="youtube"
              size={40}
              color="tomato"
            />
          </TouchableOpacity>
          <Text style={styles.title}>YouTube</Text>
      </View>
      <View style={styles.rightIcons}>
        <TouchableOpacity>
          <Icon
            style={styles.headerIcons}
            name="videocam"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={styles.headerIcons}
            name="search"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={styles.headerIcons}
            name="account-circle"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const widthScreen = "100%";

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: widthScreen,
    backgroundColor: "#292929",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logoTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerIcons: {
    marginHorizontal: 10
  }
});

export default Header;