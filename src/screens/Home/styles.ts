import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    eventName: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48
    },
    eventDate: {
      color: "white",
      fontSize: 16,
    },
    input: {
      flex: 1, //Vai preencher a primeira coluna ajustando o form
      height: 56,
      backgroundColor: "#1F1E25",
      borderRadius: 5,
      color: "#FDFCFE",
      padding: 16,
      fontSize: 16,
      marginRight: 12 // criando margin ajustando form
    },
    buttonText: {
      color: "white",
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: "#31CF67",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      width: "100%",
      flexDirection: "row",
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: "white",
      fontSize: 14,
      textAlign: "center"
    }
  });
  