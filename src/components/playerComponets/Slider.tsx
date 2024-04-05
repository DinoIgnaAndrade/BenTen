import React, { useState } from 'react';
import { PanResponder, Animated } from 'react-native';
import Svg, { Circle, Defs, ClipPath, Image as SvgImage, LinearGradient, Stop } from 'react-native-svg';
//Hooks
import { useProgress } from '@/hooks/usePlayerEffects';
import { Time } from '@/types/Types';

type Props = {
  totalDuration: Time;
  currentTime: Time;
  setCurrentTime: (currentTime: Time) => void;
  setChangeTime: (changeTime: Time) => void;
  image: any;
}

const Slider: React.FC<Props> = ({ totalDuration, currentTime, image, setCurrentTime, setChangeTime }) => {

  //States
  const [progress, setProgress] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  //PanResponder
  const pan = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

  // Calcular el porcentaje de progreso
  useProgress(currentTime, totalDuration, setProgress);

  //SVG PROPS
  // Tamaño y posición del círculo e imagen
  const circleSize = 400;
  const imageSize = 400;
  const circleRadius = circleSize / 2;
  const imageOffset = (circleSize - imageSize) / 2;
  const circumference = 2 * Math.PI * circleRadius;

  //Animaciones de interaccion
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      Animated.event([null, { dx: pan.x }], { useNativeDriver: false })(event, gestureState);
    },
    onPanResponderRelease: (event, gestureState) => {
      const newPosition = Math.max(0, Math.min(sliderValue + gestureState.dx, circleSize));
      setSliderValue(newPosition);

      // Calcular el porcentaje de progreso
      const newProgress = (newPosition / circleSize) * 100;

      // Convertir el progreso a tiempo en segundos
      const totalSeconds = Math.floor((totalDuration.minutes * 60) + totalDuration.seconds);
      const currentTimeInSeconds = (newProgress / 100) * totalSeconds;

      // Calcular los nuevos minutos y segundos
      const newMinutes = Math.floor(currentTimeInSeconds / 60);
      const newSeconds = Math.floor(currentTimeInSeconds % 60);

      // Actualizar el estado del tiempo actual
      setChangeTime({ minutes: newMinutes, seconds: newSeconds });

      // Reiniciar el valor del gesto
      pan.setValue({ x: 0, y: 0 });
    }
  });



  return (
    <Svg width={circleSize} height={circleSize} {...panResponder.panHandlers}>

      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="lightblue" />
          <Stop offset="50%" stopColor="lightgreen" />
          <Stop offset="100%" stopColor="lightcoral" />
        </LinearGradient>

        <ClipPath id="circleClip">
          <Circle cx={circleRadius} cy={circleRadius} r={circleRadius - 10} />
        </ClipPath>
      </Defs>

      <Circle
        cx={circleRadius}
        cy={circleRadius}
        r={circleRadius - 10}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={15}
        strokeDasharray={circumference}
        strokeLinecap="round"
        strokeDashoffset={circumference * (1 - progress / 100)}
        transform={`rotate(-90 ${circleRadius} ${circleRadius})`}
      />

      <SvgImage
        href={image}
        x={imageOffset}
        y={imageOffset}
        width={imageSize}
        height={imageSize}
        clipPath="url(#circleClip)"
      />
    </Svg>
  );
}

export default Slider;
