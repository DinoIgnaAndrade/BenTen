import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const AlbumIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="0 0 52 52" width={size} height={size} fill={color}>
            <Path d="M16 18a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm-3.8 1.4a1 1 0 0 0 .2 1.4A6 6 0 1 0 10 16a1 1 0 0 0 2 0 4 4 0 1 1 1.6 3.2 1 1 0 0 0-1.4.2ZM27.85 8.54a1 1 0 1 0-1.7 1.06 12 12 0 1 1-2.77-3.06A1 1 0 0 0 24.62 5a14 14 0 1 0 3.23 3.58Z" />
        </Svg>
    )
}
export default AlbumIcon