import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { AudioFile } from '@/types/Types';
import Card from './cards/Card';

type Props = {
    audioFiles: AudioFile[];
}

const TrackList: React.FC<Props> = ({ audioFiles }) => {
    return (
        <View>
            <FlatList
                data={audioFiles}
                renderItem={ ({ item }) => <Card title={item.name} uri={item.uri} /> }
                keyExtractor={(item) => item.uri}
            />
        </View>
    )
}

export default TrackList;