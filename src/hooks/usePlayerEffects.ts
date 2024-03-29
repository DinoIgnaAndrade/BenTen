import { useEffect } from 'react';
import { Time } from '../types/Types';

//Conversion de tiempo: Milisegundos/Minutos-Segundos
function convertTime(durationSeconds: number) {
    let totalSeconds = Math.floor(durationSeconds);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = (totalSeconds % 60) + 10;
    const time: Time = {
        minutes: minutes,
        seconds: seconds
    }
    return time;
}

// Inicializar el sonido cuando se monta el componente
export const useSoundInitialization = (trackUri: string, trackDuration: number, setCurrentTime: any, setIsPlaying: any, setTrackDuration: any, audioService: any) => {
    useEffect(() => {
        if (trackUri !== '') {
            audioService.initializeSound(trackUri);
            setIsPlaying(true);
        }
        setTrackDuration(convertTime(trackDuration));
        setCurrentTime({ minutes: 0, seconds: 0 });
    }, [trackUri]);
};

//Seteo de cover
export const useCoverSettingImage = (track: any, randomCoverIndex: number, coverImage: any, setCover: any) => {
    useEffect(() => {
        try {
            if (track.picture !== undefined) {
                //@ts-ignore
                const filePicture = track.picture.pictureData;
                setCover({ uri: filePicture });
            }
        } catch (error) {
            setCover(coverImage[randomCoverIndex]);
            console.log(error);
        }
    }, [track.picture]);
}

//Conversion de tiempo
export const useTimeConversion = (isPlaying: boolean, setCurrentTime: any) => {
    useEffect(() => {
        let intervalId: any;

        if (isPlaying) {
            intervalId = setInterval(() => {
                setCurrentTime((prevTime: Time) => {
                    const newSeconds = prevTime.seconds + 1;
                    const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
                    return { minutes: newMinutes, seconds: newSeconds % 60 };
                });

            }, 1000); // Llamar cada segundo
        }
        return () => clearInterval(intervalId);
    }, [isPlaying]);
}