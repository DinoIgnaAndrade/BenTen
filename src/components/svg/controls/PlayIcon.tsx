import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const PlayIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="-2 0 32 32" width={size} height={size} fill={color}>
            <Path d="M29.69 16A3.19 3.19 0 0 1 28 18.89L6.39 29.68A3.12 3.12 0 0 1 5 30a3 3 0 0 1-1.59-.46A3 3 0 0 1 2 27V9.42a1 1 0 0 1 2 0V27a1 1 0 0 0 .49.88 1 1 0 0 0 1 .05L27.07 17.1a1.29 1.29 0 0 0 0-2.2L5.5 4.11a1 1 0 0 0-1 0A1 1 0 0 0 4 5a1 1 0 0 1-2 0 3 3 0 0 1 4.39-2.68L28 13.11A3.19 3.19 0 0 1 29.69 16Z" />
        </Svg>
    )
}
export default PlayIcon