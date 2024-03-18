import * as MediaLibrary from 'expo-media-library';
import { useState } from 'react';

import { AudioFile, MediaData } from '@/types/Types';
import MetaData from './MetaData';


export const getAudioFiles = async (): Promise<MediaData[]> => {

  try {
    const { status } = await MediaLibrary.requestPermissionsAsync(); // Solicitar permisos si no se han concedido
    if (status !== 'granted') {
      console.error('Permisos no concedidos para acceder a la biblioteca de medios.');
      return [];
    }

    // Obtener todos los archivos formato audio en la biblioteca de medios
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
    });

    if (Object.keys(media).length === 0) {
      console.error('No se encontraron archivos de audio.');
      return [];
    }

    // Crear una lista de archivos de audio
    const musicFiles: AudioFile[] = media.assets.map(({ filename, uri, duration }) => ({
      name: filename,
      uri,
      duration,
    }));

    let files: MediaData[] = [];
    for (const file of musicFiles) {
      try {
        const metadata = await MetaData(file.uri);
        const track: MediaData = {
          title: metadata.title || 'No title',
          artist: metadata.artist || 'No artist',
          album: metadata.album || 'No album',
          genre: metadata.genre || 'No genre',
          picture: metadata.picture || null,
          uri: file.uri,
          duration: file.duration
        }
        files.push(track);
      } catch (error) {
        const track: MediaData = {
          title: file.name,
          artist: 'No artist',
          album: 'No album',
          genre: 'No genre',
          picture: null,
          uri: file.uri,
          duration: file.duration
        }
        console.log(track.title,track.uri);
        files.push(track);
      }
    }
    return files;

  } catch (error) {
    console.error('Error al buscar archivos de audio:', error);
    throw error;
  }

};
