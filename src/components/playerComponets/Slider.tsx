import React, { useEffect, useState } from 'react';
import Svg, { Circle, Defs, ClipPath, Image as SvgImage, LinearGradient, Stop } from 'react-native-svg';


type Props = {
  totalDuration: { minutes: number, seconds: number };
  currentTime: { minutes: number, seconds: number };
  image: any;
}

const Slider: React.FC<Props> = ({ totalDuration, currentTime, image }) => {

  const [progress, setProgress] = useState(0);

  // Calcular el porcentaje de progreso
  useEffect(() => {
    const currentTimeInSeconds = currentTime.minutes * 60 + currentTime.seconds;
    const durationInSeconds = totalDuration.minutes * 60 + totalDuration.seconds;
    const calculatedProgress = (currentTimeInSeconds / durationInSeconds) * 100;
    setProgress(calculatedProgress);
  }, [currentTime, totalDuration]);


  // Tamaño y posición del círculo e imagen
  const circleSize = 400;
  const imageSize = 400;
  const circleRadius = circleSize / 2;
  const imageOffset = (circleSize - imageSize) / 2;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <Svg width={circleSize} height={circleSize}>

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
