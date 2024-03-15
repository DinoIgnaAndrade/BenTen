import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'

import { MediaData } from '@/types/Types';
import Card from './cards/Card';

import backgrounds from '@/global/background';

type Props = {
    audioFiles: MediaData[];
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TrackList: React.FC<Props> = ({ audioFiles }) => {

        const [bckgnd, setBckgnd] = useState(backgrounds[0]);

        useEffect(() => {
            const interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * backgrounds.length);
                setBckgnd(backgrounds[randomIndex]);
            },10000);
    
            return () => clearInterval(interval);
        },[])

        return (
            <View style={styles.container}>
                <Image source={bckgnd} style={styles.background} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ backfaceVisibility: 'hidden', backgroundColor: 'transparent' }}
                    data={audioFiles}
                    renderItem={({ item }) => <Card title={item.title} artist={item.artist} uri={item.uri} />}
                    keyExtractor={(item) => item.uri}
                />
            </View>
        )
    }



export default TrackList;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
        },
        background: {
            flex: 1,
            position: 'absolute',
            width: windowWidth,
            height: windowHeight,
            resizeMode: 'stretch',
        }
    })