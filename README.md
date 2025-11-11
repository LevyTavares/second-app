# second-app

Pequeno app Expo/React Native.

## Rodando

```sh
# limpar cache e iniciar
npx expo start -c

# abrir no Android
npm run android

# abrir no iOS (em macOS)
npm run ios

# web (opcional)
npm run web
```

## Notas

- Em React Native, texto literal deve sempre estar dentro de `<Text>`.
- Elementos HTML como `<div>`, `<span>`, `<p>` não existem no mobile. Use `<View>`, `<Text>`, `<Image>`, etc.
- Para Android/iOS, importe de `react-native`. `react-native-web` é apenas para o alvo Web.
