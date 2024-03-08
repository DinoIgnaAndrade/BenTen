import * as MediaLibrary from 'expo-media-library';
import { AudioFile } from '@/types/Types';

export const getAudioFiles = async (): Promise<AudioFile[]> => {

  try {

    const { status } = await MediaLibrary.requestPermissionsAsync(); // Solicitar permisos si no se han concedido
    if (status !== 'granted') {
      console.error('Permisos no concedidos para acceder a la biblioteca de medios.');
      return [];
    }

    // Obtener todos los archivos en la biblioteca de medios
    const media  = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
    });
    if (Object.keys(media).length === 0) {
      console.error('No se encontraron archivos de audio.');
      return [];
    }

    // Filtrar archivos que puedan ser de tipo audio basándonos en la extensión del archivo
    if (media === null) {
      console.error('No se encontraron archivos de audio.');
      return [];
    }

    const musicFiles: AudioFile[] = media.assets.map(({ filename, uri }) => ({
      name: filename,
      uri,
    }));

    return musicFiles;

  } catch (error) {
    console.error('Error al buscar archivos de audio:', error);
    throw error;
  }
};
