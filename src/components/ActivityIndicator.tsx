import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Defs, ClipPath, Image as SvgImage, LinearGradient, Stop } from 'react-native-svg';

const ActivityIndicator = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress + 0.1) % 100); // Incrementar el progreso
        }, 30); // Cambiar el progreso
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    const circleSize = 400; // Tamaño del círculo
    const imageSize = 400; // Tamaño de la imagen
    const circleRadius = circleSize / 2; // Radio del círculo
    const imageOffset = (circleSize - imageSize) / 2; // Desplazamiento de la imagen dentro del círculo

    const circumference = 2 * Math.PI * circleRadius;

    return (
        <View style={styles.container}>
            <Svg
                width={circleSize}
                height={circleSize}
            >
                <Defs>
                    <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="lightblue" />
                        <Stop offset="50%" stopColor="lightgreen" />
                        <Stop offset="100%" stopColor="lightcoral" />
                    </LinearGradient>
                    <ClipPath id="circleClip">
                        <Circle
                            cx={circleRadius}
                            cy={circleRadius}
                            r={circleRadius - 10} // Reducir el radio para que el círculo no se vea cortado
                        />
                    </ClipPath>
                </Defs>
                <Circle
                    cx={circleRadius}
                    cy={circleRadius}
                    r={circleRadius - 10} // Reducir el radio para que el círculo no se vea cortado
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth={15}
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                    strokeDashoffset={circumference * (1 - progress / 100)}
                    transform={`rotate(-90 ${circleRadius} ${circleRadius})`}
                />
                <SvgImage
                    href={require('../assets/img/icons/BenTen.jpg')}
                    x={imageOffset} // Ajusta la posición x de la imagen dentro del círculo
                    y={imageOffset} // Ajusta la posición y de la imagen dentro del círculo
                    width={imageSize} // Ajusta el ancho de la imagen
                    height={imageSize} // Ajusta la altura de la imagen
                    clipPath="url(#circleClip)" // Recorta la imagen en forma de círculo
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ActivityIndicator;
