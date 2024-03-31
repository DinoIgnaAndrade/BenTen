import { Time } from '../types/Types';

//Conversion de tiempo: Milisegundos/Minutos-Segundos
export function convertTime(durationSeconds: number) {
    let totalSeconds = Math.floor(durationSeconds);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = (totalSeconds % 60) + 10;
    const time: Time = {
        minutes: minutes,
        seconds: seconds
    }
    return time;
}

export function convertTimeToMilliseconds(time: Time): number {
    // Convertir los minutos a segundos y sumar los segundos
    const totalSeconds = time.minutes * 60 + time.seconds;
    // Convertir los segundos a milisegundos
    const totalMilliseconds = totalSeconds * 1000;
    return totalMilliseconds;
}