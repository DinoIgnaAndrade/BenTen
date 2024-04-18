import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const BackIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="0 0 65 65" width={size} height={size} fill={color}>
            <Path d="M53 60H11a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7h35a1 1 0 0 1 0 2H11a5 5 0 0 0-5 5v42a5 5 0 0 0 5 5h42a5 5 0 0 0 5-5V11a5 5 0 0 0-5-5 1 1 0 0 1 0-2 7 7 0 0 1 7 7v42a7 7 0 0 1-7 7Zm.5-4a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm-4 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm-4 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM32 55a22.85 22.85 0 0 1-13.59-4.44 1 1 0 1 1 1.18-1.62A20.81 20.81 0 0 0 32 53a21 21 0 1 0-21-21 20.81 20.81 0 0 0 4.06 12.41 1 1 0 1 1-1.62 1.18A23 23 0 1 1 32 55Zm0-6.47a16.53 16.53 0 0 1-9-30.37 1 1 0 1 1 1.1 1.68 14.53 14.53 0 1 0 8-2.37 1 1 0 0 1 0-2 16.53 16.53 0 0 1 0 33.06ZM38 39a1 1 0 0 1-.71-.29L32 33.41l-5.29 5.3a1 1 0 0 1-1.42-1.42l5.3-5.29-5.3-5.29a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.3a1 1 0 0 1 1.42 1.42L33.41 32l5.3 5.29a1 1 0 0 1 0 1.42A1 1 0 0 1 38 39ZM13 11h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Z" />
        </Svg>
    )
}
export default BackIcon