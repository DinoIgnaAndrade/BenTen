import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type SliderProps = {
  duration: number; // Duración total de la canción en segundos
  isPlaying: boolean; // Indicador de si la canción está reproduciéndose o no
};

type ContextType = {
  startX: number;
};

const Slider: React.FC<SliderProps> = ({ duration, isPlaying }) => {

  const translateX = useSharedValue(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        translateX.value = (duration / 100) * translateX.value;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [duration, isPlaying]);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: ContextType) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx: ContextType) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: () => {
      translateX.value = withSpring(translateX.value);
    },
  });

  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.slider, sliderStyle]}>
          <View style={styles.indicator} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '80%',
    height: 40,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15,
  },
});


