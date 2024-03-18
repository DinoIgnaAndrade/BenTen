//Modules Imports
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'

//Types
import { MediaData } from '@/types/Types';

//Components
import Card from './cards/Card';

//Asssets
import backgrounds from '@/global/background';
import { useDispatch } from 'react-redux';

//Propiesdades entrantes
type Props = {
    audioFiles: MediaData[];
}
//Dimesiones de la pantalla
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TrackList: React.FC<Props> = ({ audioFiles }) => {

        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);
        const dispatch = useDispatch();

        return (
            <View style={styles.container}>
                <Image source={bckgnd} style={styles.background} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ backfaceVisibility: 'hidden', backgroundColor: 'transparent' }}
                    data={audioFiles}
                    renderItem={({ item }) => <Card track={item}/>}
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
            resizeMode: 'cover',
        }
    })