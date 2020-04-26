import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { withOrientation } from "react-navigation";

function Item({ title, imageUrl, channel }) {
    return (
      <View style={styles.item}>
        <Image source={{ uri: imageUrl }} style={{ height: 220 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Image
              source={{ uri: channel }}
              style={{ height: 40, width: 40, borderRadius: 30, margin: 10 }}
            />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text
                style={{
                  paddingLeft: 6,
                  paddingTop: 4,
                  color: "gray"
                }}
              >
                ABC studios . {parseInt(Math.random() * 1000)}K Views . {parseInt(Math.random() * 10)} months ago
              </Text>
            </View>
          </View>
          <Icon
            name="dots-vertical"
            size={25}
            color="gray"
            style={{ paddingTop: 20 }}
          />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    item: {
      height: 300,
      borderStyle: "solid",
      borderBottomColor: "white"
    },
    title: {
      fontSize: 20,
      paddingLeft: 6,
      paddingTop: 10,
      shadowOpacity: 0,
      color: "white",
    }
  });
export default Item;