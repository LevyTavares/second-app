import { View, Text, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

class App extends Component {
  render() {
    let nome = "Levy";
    let img =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64zTVSf1tz1PlUrBvTvoCzb1Hj7OneUDLJFYrXergv80uT7rm_OjUTCBmXvlXOhC2sSc&usqp=CAU";
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bem vindo ao app de teste!</Text>

        <Text style={styles.description}>
          Este é um aplicativo React Native usando classe.
        </Text>

        <Text style={styles.curso}>Sistemas de Informação, UNINASSAU</Text>

        <Text style={styles.curso}>Feito por {nome}</Text>

        <Image
          /*source={{
            uri: img,
          }}*/
          source={{
            uri: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64e2a6f57661a0.16805417.png?lastEdited=1692575504&w=1024&h=1024&f=webp",
          }}
          style={{
            width: 300,
            height: 300,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 10,
          }}
        />

        <View style={{ width: 320, marginTop: 10 }}>
          <YoutubePlayer
            height={200}
            play={false}
            videoId="F3wJzNQUivw"
            webViewProps={{ allowsFullscreenVideo: true }}
          />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#222",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  curso: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
});
