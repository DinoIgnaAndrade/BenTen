import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const PlaylistQueueIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="0 2 32 32" width={size} height={size} fill={color}>
            <Path
                d="M22 11V5a1 1 0 0 1 1.45-.89l6 3a1 1 0 0 1 0 1.78l-6 3A1 1 0 0 1 23 12a1 1 0 0 1-.53-.15A1 1 0 0 1 22 11Zm-8-2h5a1 1 0 0 0 0-2h-5a1 1 0 0 0 0 2ZM3 9h7a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm26 5H10a1 1 0 0 0 0 2h19a1 1 0 0 0 0-2ZM3 16h3a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm26 5h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2ZM3 23h19a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm26 5H16a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2Zm-17 0H3a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2Z"
                data-name="Song List"
            />
        </Svg>
    )
}
export default PlaylistQueueIcon