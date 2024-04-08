import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const PlaylistIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="0 0 52 52" width={size} height={size} fill={color}>
            <Path d="M12 5v20a4.92 4.92 0 0 1-3.93 4.9 6 6 0 0 1-1.51.2 5.34 5.34 0 0 1-2.27-.5 4.13 4.13 0 0 1-1.67-6.26 5.53 5.53 0 0 1 3.12-2.14 5.72 5.72 0 0 1 2.43-.12A1 1 0 0 1 9 22.23a1 1 0 0 1-1.16.82 3.64 3.64 0 0 0-1.57.08 3.58 3.58 0 0 0-2 1.35 2.14 2.14 0 0 0 .89 3.31 3.45 3.45 0 0 0 2.4.17A2.93 2.93 0 0 0 10 25V5a1 1 0 0 1 2 0Zm6 5a1 1 0 0 0 2 0 6 6 0 0 0-6-6 1 1 0 0 0 0 2 4 4 0 0 1 4 4Zm4-2h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2Zm7 5H17a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Zm0 7H17a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Zm0 7H17a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z" />
        </Svg>
    )
}
export default PlaylistIcon