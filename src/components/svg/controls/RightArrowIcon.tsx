import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const RightArrowIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="1 0 30 32" width={size} height={size} fill={color}>
            <Path d="M21 16a3 3 0 0 1-1.5 2.6l-13 7.53a2.95 2.95 0 0 1-3 0 3 3 0 0 1-1.5-2.6V14a1 1 0 0 1 2 0v9.53a1 1 0 0 0 1.5.87l13-7.53a1 1 0 0 0 0-1.74L5.5 7.6a1 1 0 0 0-1.5.87V10a1 1 0 0 1-2 0V8.47a3 3 0 0 1 4.5-2.6l13 7.53A3 3 0 0 1 21 16Zm8 3a1 1 0 0 0 1-1V8a3 3 0 0 0-6 0v16a3 3 0 0 0 6 0v-2a1 1 0 0 0-2 0v2a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1Z"/>
        </Svg>
    )
}
export default RightArrowIcon