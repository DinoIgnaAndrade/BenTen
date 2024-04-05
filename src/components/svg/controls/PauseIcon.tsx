import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const PauseIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="1 0 30 32" width={size} height={size} fill={color}>
            <Path d="M14 5v22c0 1.68-1.84 3-4.2 3H8.2C5.84 30 4 28.68 4 27V11a1 1 0 0 1 2 0v16c0 .35.84 1 2.2 1h1.6c1.36 0 2.2-.65 2.2-1V5c0-.35-.84-1-2.2-1H8.2C6.84 4 6 4.65 6 5v2a1 1 0 0 1-2 0V5c0-1.68 1.84-3 4.2-3h1.6C12.16 2 14 3.32 14 5Zm13 17a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2a1 1 0 0 0-2 0v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 0 1 1Z" />
        </Svg>
    )
}
export default PauseIcon