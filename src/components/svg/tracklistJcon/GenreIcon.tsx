import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const GenreIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="0 0 52 52" width={size} height={size} fill={color}>
            <Path d="M29 10a1 1 0 0 0-1 1v7.65c-.16-.1-.31-.21-.49-.3a5.52 5.52 0 0 0-3.77-.29c-2.74.73-4.44 3.28-3.8 5.67A4.63 4.63 0 0 0 24.57 27a5.58 5.58 0 0 0 1.5-.2 5.52 5.52 0 0 0 3.12-2.14A4.34 4.34 0 0 0 30 22V11a1 1 0 0 0-1-1Zm-1.45 13.47a3.48 3.48 0 0 1-2 1.35c-1.67.45-3.32-.27-3.67-1.6s.71-2.78 2.38-3.23a3.74 3.74 0 0 1 1-.13 3.33 3.33 0 0 1 1.41.3 2.23 2.23 0 0 1 1.27 1.43 2.25 2.25 0 0 1-.39 1.88ZM30 5v2a1 1 0 0 1-2 0v-.66l-15 4.41V12a1 1 0 0 1-2 0v-2a1 1 0 0 1 .72-1l17-5a1 1 0 0 1 .88.16A1 1 0 0 1 30 5ZM12 15a1 1 0 0 0-1 1v5.79a4 4 0 0 0-.49-.29 5.52 5.52 0 0 0-3.77-.3c-2.74.73-4.44 3.28-3.8 5.68a4.63 4.63 0 0 0 4.63 3.21 6 6 0 0 0 1.5-.19 5.53 5.53 0 0 0 3.12-2.15 4.29 4.29 0 0 0 .8-2.69s0 0 0-.06v-9a1 1 0 0 0-.99-1Zm-1.45 11.61a3.48 3.48 0 0 1-2 1.35c-1.67.45-3.32-.27-3.67-1.6s.71-2.78 2.38-3.23a3.74 3.74 0 0 1 1-.13 3.2 3.2 0 0 1 1.41.31 2.19 2.19 0 0 1 1.27 1.43 2.23 2.23 0 0 1-.39 1.87Z" />
        </Svg>
    )
}
export default GenreIcon

