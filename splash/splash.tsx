import React, {useEffect, useState} from "react";
import createStyles from "./splash.styles";
import {LinearGradient} from "expo-linear-gradient";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import SplashProps from "./interfaces";
const Splash = ({height, width}: SplashProps) => {
  const styles = createStyles({BUTTON_HEIGHT: height});
  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);

  const XLight = useSharedValue(width);
  const Fade = useSharedValue(1);

  useEffect(() => {
    XLight.value = withRepeat(
      withTiming(
        -XLight.value,
        {
          duration: 1000,
          easing: Easing.linear,
        },
        () => {}
      ),

      -1,
      true
    );

    Fade.value = withRepeat(
      withTiming(Fade.value === 0 ? 1 : 0, {
        duration: 500,
        easing: Easing.linear,
      }),
      -1,
      true
    );
  }, []);

  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{translateX: XLight.value}],
    opacity: Fade.value,
  }));
  const getCurrentColor = () => {
    return [
      "rgba(255, 255, 255, 0.1)",
      "rgba(255, 255, 255, 0.2)",
      "rgba(255, 255, 255, 0.4)",
      "rgba(255, 255, 255, 0.7)",
      "rgba(255, 255, 255, 0.4)",
      "rgba(255, 255, 255, 0.2)",
      "rgba(255, 255, 255, 0.1)",
    ];
  };

  return (
    <Animated.View style={[animatedChanged, styles.splash]}>
      <AnimatedLinearGradient
        style={styles.animatedSplashView}
        colors={getCurrentColor()}
        locations={[0.0, 0.2, 0.3, 0.5, 0.7, 0.8, 1]}
        start={[0, 1]}
        end={[1, 1]}
        pointerEvents="none"
      />
    </Animated.View>
  );
};

export default Splash;
