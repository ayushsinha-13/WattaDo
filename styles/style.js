import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#1f3e3b"
    },
    Top: {
        backgroundColor: "#44A588",
        alignItems: "center",
        borderBottomRightRadius: 90,
        borderBottomLeftRadius: 90,

    },
    TopText: {
        color: "#E8FCFA",
        fontSize: 50,
        fontFamily: 'montserrat',
    },
    StartButtonContainer: {
        flex: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    StartButton :{
        height: 200,
        aspectRatio: 1,
        backgroundColor: "#44A588",
        justifyContent: "center",
        borderRadius: 125,
        elevation: 8,
    },
    StartLogo: {
        color: "#E8FCFA",
        alignSelf:"center",
    },
    FooterContainer: {
        flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        padding: 11,
        backgroundColor: "#44A588",
        alignItems: "center"
    },
    FooterText: {
        fontSize: 17,
        fontWeight: "500",
        color: "white"
    },
    FactContainer: {
        flex: 1,
        backgroundColor: "#1f3e3b",
    },
    FactTextContainer: {
        backgroundColor: "#44A588",
        flex: 11,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        borderColor: '#000',
        elevation: 10,
        borderWidth: 6,
        margin: 20,
    },
    FactText: {
        fontSize: 35,
        textAlign: 'left',
        fontWeight: "500",
        color: "#E8FCFA",
    },
    ReloadButtonContainer:{
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    },
    ModalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    ModalView: {
        margin: 20,
        backgroundColor: "#E8FCFA",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 10
    },
    LoadingText: {
        fontWeight: "600",
        fontSize: 30,
        color: "#000"
    },
    IconContainer: {
        padding: 10,
        marginTop: 30,
        elevation: 8,
        marginBottom: 30,
        borderRadius: 100,
        alignSelf: "center",
        alignItems: "center",       
        backgroundColor: "#FF6D6D",
    },
    ImageStyle: {
        padding: 10,
        height: 110,
        aspectRatio: 1,
    },
    AppNameContainer: {
        height: 200,
        padding: 20,
        width:"80%",
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 10,
        alignSelf: "center",
        backgroundColor: "#44A588",
    },
    AppNameText: {
        fontFamily: "anton",
        color: "black",
        fontSize: 20,
        marginBottom: 20,
    },
    AppNameVersion: {
        color: "black",
        fontSize: 30,
    }

})

export default Styles