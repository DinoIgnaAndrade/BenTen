import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {
    coverImage: any;
    artist: string;
    title: string;
}

const TagInfo: React.FC<Props> = ({ coverImage, artist, title }) => {

    return (
        <>
            <Image source={coverImage} style={styles.imageCover} />

            <View style={styles.infoContainer}>
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

})