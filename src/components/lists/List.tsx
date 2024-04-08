import React from 'react';
import { View, Image, Pressable, StyleSheet, Dimensions } from 'react-native';
//Components
import TrackList from '@/components/lists/TrackList';
//Assets
import BackIcon from '@/components/svg/tracklistJcon/BackIcon';
//Types
import { MediaData } from '@/types/Types';

type Props = {
    category: string;
    backgroundSource: any;
    showTrack: boolean;
    list: string[];
    tracks: MediaData[];
    onBackPress: () => void;
}

const List: React.FC<Props> = ({ category, backgroundSource, showTrack, list, tracks, onBackPress,}) => {

    return (
        <View>
            <Image source={backgroundSource} style={styles.background} />
            {showTrack ? (
                <>
                    <Pressable style={styles.back} onPress={onBackPress}>
                        <BackIcon color='white' size={30} />
                    </Pressable>
                    <TrackList audioFiles={tracks} />
                </>
            ) : (
                <TrackList category={category} text={list} />
            )}
        </View>
    );
};

export default List;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        resizeMode: 'cover',
    },
    back: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 1000,
        width: 50,
        height: 50,
    },
});
