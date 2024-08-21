import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [font] = useFonts({
    Nixie_One: require("../sobre/src/fontes/Nixie_One/NixieOne-Regular.ttf"),
  });

  if (!font) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("./src/imagem/doceencanto.png")}
        />
      </View>

      <ScrollView>
        <View style={styles.cards}>
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={require("./src/imagem/cupcake.png")}
            />
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Cupcake</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Donuts</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
            <Image
              style={styles.img}
              source={require("./src/imagem/donuts.png")}
            />
          </View>
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={require("./src/imagem/cookies.png")}
            />
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Cookie</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Cupcake</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
            <Image
              style={styles.img}
              source={require("./src/imagem/sorvete.png")}
            />
          </View>
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={require("./src/imagem/brownie.png")}
            />
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Cupcake</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Cupcake</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
            <Image
              style={styles.img}
              source={require("./src/imagem/bolo.png")}
            />
          </View>
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={require("./src/imagem/cupcake.png")}
            />
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Cupcake</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.textsCard}>
              <Text style={styles.titulo}>Cupcake</Text>
              <Text style={styles.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
            <Image
              style={styles.img}
              source={require("./src/imagem/cupcake.png")}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "lightpink",
    width: "100%",
    height: 125,
    justifyContent: "flex-end",
  },

  logo: {
    width: "100%",
    height: "80%",
  },

  cards: {
    flex: 1,
  },

  card: {
    width: "100%",
    height: 150,

    flexDirection: "row",
    padding: 15,
  },

  img: {
    width: "30%",
    height: "100%",
  },

  textsCard: {
    flex: 1,
    textAlign: "justify",
    justifyContent: "center",
  },

  footer: {
    width: "100%",
    height: 50,
    backgroundColor: "lightpink",
  },
});
