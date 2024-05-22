import { useEffect } from 'react';
import { Time } from '../types/Types';
import { convertTime, convertTimeToMilliseconds } from '../utils/converters';

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

// Seteo de cover
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

// Conversion de tiempo
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

// Reseteo y desmonte
export const useReset = (currentTime: Time, trackDuration: Time, setIsPlaying: any, audioService: any, setCurrentTime: any) => {
    useEffect(() => {
        if (currentTime.minutes === trackDuration.minutes && currentTime.seconds === trackDuration.seconds) {
            setIsPlaying(false);
            audioService.stopSound();
            setCurrentTime({ minutes: 0, seconds: 0 });
        }
    }, [currentTime, trackDuration]);
}

// Calcular el porcentaje de progreso
export const useProgress = (currentTime: Time, totalDuration: Time, setProgress: any) => {
    useEffect(() => {
        const currentTimeInSeconds = currentTime.minutes * 60 + currentTime.seconds;
        const durationInSeconds = totalDuration.minutes * 60 + totalDuration.seconds;
        const calculatedProgress = (currentTimeInSeconds / durationInSeconds) * 100;
        setProgress(calculatedProgress);
    }, [currentTime, totalDuration]);
}

// Seteo de tiempo
export const useSetTime = (changeTime: Time, audioService: any, setCurrentTime: any) => {
    useEffect(() => {
        if (changeTime.minutes !== 0 || changeTime.seconds !== 0) {
            setCurrentTime(changeTime);
            audioService.setMiliSecondsPosition(convertTimeToMilliseconds(changeTime));
        }
    }, [changeTime]);
}
