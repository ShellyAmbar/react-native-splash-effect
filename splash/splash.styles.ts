import {StyleSheet} from "react-native";
const createStyles = ({BUTTON_HEIGHT}: {BUTTON_HEIGHT: number}) =>
  StyleSheet.create({
    splash: {
      height: 2 * BUTTON_HEIGHT,
      width: BUTTON_HEIGHT / 5,
      position: "absolute",

      zIndex: 1000,
    },
    animatedSplashView: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transform: [{rotate: "-30deg"}],
    },
  });
export default createStyles;
