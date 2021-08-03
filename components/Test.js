import React from "react";

import Animated, {
  withSpring,
  withTiming,
  withRepeat,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  Easing,
} from "react-native-reanimated";

import {
  TapGestureHandler,
  PanGestureHandler,
} from "react-native-gesture-handler";

import { StyleSheet, View } from "react-native";

// import { SafeAreaProvider } from "react-native-safe-area-context";

const Test = () => {
  const pressed = useSharedValue(false);

  const startingPos = 0;
  const x = useSharedValue(startingPos);
  const y = useSharedValue(startingPos);

  const position = useSharedValue(0);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.beginX = x.value;
      ctx.beginY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.beginX + event.translationX;
      y.value = ctx.beginY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      x.value = withSpring(startingPos);
      y.value = withSpring(startingPos);
    },
  });

  const uas1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(position.value * 255) }],
    };
  });
  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? "#FEEF86" : "#001972",
      // transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }],
      transform: [
        { scale: withSpring(pressed.value ? 1.2 : 1) },
        { translateX: x.value },
        { translateY: y.value },
      ],
    };
  });

  return (
    // <SafeAreaProvider>
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.ball, uas]} />
      </PanGestureHandler>
      {/* <Animated.View style={[styles.ball, uas1]} />
        <Button
          containerStyle={styles.button}
          title="Move"
          onPress={() => {
            position.value = Math.random();
          }}
        /> */}
    </View>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    // alignItems: "center",
  },
  button: {
    marginTop: 30,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#021A74",
  },
});

export default Test;
