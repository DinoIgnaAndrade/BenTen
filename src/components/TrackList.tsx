import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { MediaData } from '@/types/Types';
import Card from './cards/Card';

type Props = {
    audioFiles: MediaData[];
}

const TrackList: React.FC<Props> = ({ audioFiles }) => {
    return (
        <View>
            <FlatList
                data={audioFiles}
                renderItem={ ({ item }) => <Card title={item.title} uri={item.uri} /> }
                keyExtractor={(item) => item.uri}
            />
        </View>
    )
}

export default TrackList;