import * as FileSystem from 'expo-file-system';
import MusicInfo from 'expo-music-info-2';

export default async function MetaData(uri: string) {
    try {
        const info = await FileSystem.getInfoAsync(uri);
        //@ts-ignore
        let metadata = await MusicInfo.getMusicInfoAsync(info.uri, {
            title: true,
            artist: true,
            album: true,
            genre: true,
            picture: true
          });
          return metadata;
    } catch (error) {
        console.error('Error al obtener los metadatos del archivo:', error);
    }
}
