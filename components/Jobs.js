import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styled from "styled-components/native";

class Jobs extends Component {
  state = { playing: false };

  togglePlay = () => this.setState((prev) => ({ playing: !prev.playing }));

  render() {
    const nome = "Levy";
    const avatar =
      "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64e2a6f57661a0.16805417.png?lastEdited=1692575504&w=1024&h=1024&f=webp";
    return (
      <Screen>
        <StatusBar barStyle="light-content" />
        <Header>
          <HeaderTitle>App Demo</HeaderTitle>
          <Tag>v1.0</Tag>
        </Header>
        <ScrollArea>
          <CardHero>
            <Avatar source={{ uri: avatar }} />
            <HeroTextArea>
              <HeroTitle>Bem vindo, {nome}!</HeroTitle>
              <HeroSubtitle>
                Aplicativo React Native (classe + YouTube)
              </HeroSubtitle>
            </HeroTextArea>
          </CardHero>
          <SectionCard>
            <SectionTitle>Curso</SectionTitle>
            <P>Sistemas de Informação - UNINASSAU</P>
            <P>Exemplo de player YouTube integrado abaixo.</P>
          </SectionCard>
          <VideoCard>
            <VideoHeader>
              <VideoTitle>Vídeo destaque</VideoTitle>
              <Chip>Aula</Chip>
            </VideoHeader>
            <PlayerWrapper>
              <YoutubePlayer
                height={210}
                play={this.state.playing}
                videoId="F3wJzNQUivw"
                webViewProps={{ allowsFullscreenVideo: true }}
              />
            </PlayerWrapper>
            <ActionsRow>
              <PrimaryButton onPress={this.togglePlay}>
                <PrimaryButtonText>
                  {this.state.playing ? "Pausar" : "Reproduzir"}
                </PrimaryButtonText>
              </PrimaryButton>
              <GhostButton onPress={() => this.setState({ playing: false })}>
                <GhostButtonText>Parar</GhostButtonText>
              </GhostButton>
            </ActionsRow>
          </VideoCard>
          <FooterSpace />
        </ScrollArea>
      </Screen>
    );
  }
}

export default Jobs;

// Styled Components moved from App.js
const Screen = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  padding-top: ${StatusBar.currentHeight || 32}px;
`;
const Header = styled.View`
  padding: 0 20px 12px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;
const Tag = styled.Text`
  background-color: ${({ theme }) => theme.colors.cardAlt};
  color: ${({ theme }) => theme.colors.textDim};
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.pill}px;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const ScrollArea = styled.ScrollView`
  flex: 1;
  padding: 0 18px;
`;
const CardHero = styled.View`
  background-color: #1d2430;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  padding: 18px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;
const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 40px;
  margin-right: 16px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
`;
const HeroTextArea = styled.View`
  flex: 1;
`;
const HeroTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
`;
const HeroSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 13px;
`;
const SectionCard = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: 16px 18px 18px 18px;
  margin-bottom: 18px;
`;
const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;
const P = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textDim};
  margin-bottom: 4px;
`;
const VideoCard = styled.View`
  background-color: ${({ theme }) => theme.colors.cardAlt};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: 16px 16px 20px 16px;
`;
const VideoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const VideoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 600;
`;
const Chip = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.pill}px;
  font-size: 11px;
  overflow: hidden;
`;
const PlayerWrapper = styled.View`
  border-radius: ${({ theme }) => theme.radius.sm}px;
  overflow: hidden;
  margin-bottom: 14px;
`;
const ActionsRow = styled.View`
  flex-direction: row;
`;
const PrimaryButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radius.sm}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 12px;
`;
const PrimaryButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
`;
const GhostButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radius.sm}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  flex: 1;
  align-items: center;
`;
const GhostButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 14px;
  font-weight: 500;
`;
const FooterSpace = styled.View`
  height: 40px;
`;
