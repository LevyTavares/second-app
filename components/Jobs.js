import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

// Componente simplificado para fins introdutórios
export default function Jobs() {
  const [playing, setPlaying] = useState(false);
  const nome = "Levy";
  const avatar =
    "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64e2a6f57661a0.16805417.png?lastEdited=1692575504&w=1024&h=1024&f=webp";

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>App Demo</Text>
        <Text style={styles.tag}>v1.0</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.heroCard}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.heroTitle}>Bem vindo, {nome}!</Text>
            <Text style={styles.heroSubtitle}>
              Aplicativo React Native + YouTube
            </Text>
          </View>
        </View>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Curso</Text>
          <Text style={styles.paragraph}>
            Sistemas de Informação - UNINASSAU
          </Text>
          <Text style={styles.paragraph}>Player do YouTube logo abaixo.</Text>
        </View>
        <View style={styles.videoCard}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoTitle}>Vídeo destaque</Text>
            <Text style={styles.chip}>Aula</Text>
          </View>
          <View style={styles.playerWrapper}>
            <YoutubePlayer
              height={210}
              play={playing}
              videoId="F3wJzNQUivw"
              webViewProps={{ allowsFullscreenVideo: true }}
            />
          </View>
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={[styles.primaryButton, styles.button]}
              onPress={() => setPlaying(!playing)}
            >
              <Text style={styles.primaryButtonText}>
                {playing ? "Pausar" : "Reproduzir"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ghostButton, styles.button]}
              onPress={() => setPlaying(false)}
            >
              <Text style={styles.ghostButtonText}>Parar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

// Estilos básicos enxutos
const C = {
  bg: "#0f1115",
  text: "#E5E7EB",
  textDim: "#94A3B8",
  primary: "#6366F1",
  card: "#1c2129",
  cardAlt: "#252c36",
  border: "#2c3440",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: C.bg,
    paddingTop: StatusBar.currentHeight || 32,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: { fontSize: 22, fontWeight: "700", color: C.text },
  tag: {
    backgroundColor: C.cardAlt,
    color: C.textDim,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    fontSize: 11,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 18 },
  heroCard: {
    backgroundColor: "#1d2430",
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 40,
    marginRight: 16,
    borderWidth: 2,
    borderColor: C.primary,
  },
  heroTitle: {
    color: C.text,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
  heroSubtitle: { color: C.textDim, fontSize: 13 },
  sectionCard: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: C.text,
    marginBottom: 8,
  },
  paragraph: { fontSize: 14, color: C.textDim, marginBottom: 4 },
  videoCard: {
    backgroundColor: C.cardAlt,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 14,
    padding: 16,
  },
  videoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  videoTitle: { color: C.text, fontSize: 15, fontWeight: "600" },
  chip: {
    backgroundColor: C.primary,
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    fontSize: 11,
  },
  playerWrapper: { borderRadius: 8, overflow: "hidden", marginBottom: 14 },
  actionsRow: { flexDirection: "row" },
  button: { flex: 1 },
  primaryButton: {
    backgroundColor: C.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: { color: "#fff", fontWeight: "600", fontSize: 14 },
  ghostButton: {
    backgroundColor: C.card,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.border,
    alignItems: "center",
    justifyContent: "center",
  },
  ghostButtonText: { color: C.textDim, fontSize: 14, fontWeight: "500" },
});
