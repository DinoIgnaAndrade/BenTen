import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Time } from '@/types/Types';

type Props = {
    artist: string;
    title: string;
    trackDuration: Time;
    currentTime: Time;
}

const TagInfo: React.FC<Props> = ({ artist, title, trackDuration, currentTime }) => {

    return (
        <>
            <View style={styles.infoContainer}>
                <Text style={styles.time}>{currentTime.minutes}:{currentTime.seconds} / {trackDuration.minutes}:{trackDuration.seconds}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
        </>
    )
}

export default TagInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Imagenes
    imageCover: {
        width: '70%',
        height: '35%',
        borderRadius: 1000,
        resizeMode: 'cover',
    },

    //Textos
    infoContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
    artist: {
        fontSize: 18,
        color: 'white',
    },
    time:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 20,
    }

})