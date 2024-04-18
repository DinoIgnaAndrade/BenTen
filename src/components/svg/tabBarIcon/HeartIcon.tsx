import React from 'react'
import { Path, Svg } from 'react-native-svg'

type Props = {
    color: string
    size: number
}
const HeartIcon: React.FC<Props> = ({ color, size }) => {
    return (
        <Svg viewBox="0 0 52 52" width={size} height={size} fill={color}>
            <Path d="M36.476 9.25c3.546 0 6.431 3.102 6.431 6.915a1 1 0 0 0 2 0c0-4.916-3.782-8.915-8.431-8.915a1 1 0 0 0 0 2z" />
            <Path d="M36.481 1.995c-4.14 0-7.96 1.99-10.48 5.4-2.53-3.41-6.34-5.4-10.48-5.4-7.28 0-13.15 6.22-13.36 14.14-.07 2.71 1.4 6.35 4.5 11.13 6.61 10.18 18.52 22 18.64 22.12a1 1 0 0 0 1.39.02c.02-.03 2.03-1.94 4.83-4.86 0 .05.01.1.01.15.16 1.25.63 2.46 1.35 3.5.47.69.99 1.16 1.56 1.46.46.23.96.35 1.47.35 1.04 0 2.07-.48 2.7-1.35.82-1.14.76-2.56.71-3.69v-.11c-.1-2.25.05-4.52.43-6.75l.06-.38c.31-2 1.13-3.93 2.37-5.59 2.2-2.93 3.95-5.63 5.2-8.02 1.65-3.16 2.46-5.76 2.46-7.95 0-7.81-6-14.17-13.36-14.17zm9.51 20.44c-.01 0-.03 0-.04-.01l-.15-.03c-.22-.05-.44-.09-.66-.11-.08-.01-.16-.02-.25-.02-.18-.01-.37-.02-.55-.01-.08 0-.15 0-.23.01-.25.02-.5.06-.74.12-.88.23-1.63.7-2.28 1.21-.22.16-.43.34-.63.5a42.804 42.804 0 0 0-4.85 4.86c-.35.42-.69.81-1.05.95-.58.22-1.34-.2-1.8-.73-.42-.49-.72-1.1-1.04-1.75-.16-.31-.32-.63-.49-.93-.81-1.46-1.83-2.35-3.01-2.63a3.46 3.46 0 0 0-.72-.09c-.03 0-.06-.01-.09-.01-.02 0-.04.01-.07.01-.24.01-.49.03-.73.08l-.11.03c-.23.06-.46.13-.68.22-.04.02-.08.03-.12.05-.24.11-.48.24-.71.39a6.694 6.694 0 0 0-.83.64c-.63.59-1.12 1.25-1.59 1.9-.22.3-.45.61-.68.9-.47.57-.87.86-1.19.86h-.01c-.34 0-.77-.33-1.15-.65l-.62-.52c-1.11-.94-2.25-1.91-3.61-2.62-1.96-1.02-4.04-1.22-5.72-.55-.48.2-.91.45-1.32.69-.13.08-.27.16-.4.24-2.52-4.01-3.76-7.11-3.71-9.24.18-6.84 5.17-12.2 11.36-12.2 3.92 0 7.52 2.14 9.62 5.71.36.62 1.36.62 1.72 0 2.1-3.57 5.69-5.71 9.62-5.71 6.26 0 11.36 5.46 11.36 12.17 0 1.67-.63 3.78-1.85 6.27z" />
        </Svg>
    )
}
export default HeartIcon