export type AudioServiceType<T> = {
  sound: T | undefined;
  isPlaying: boolean;
  playOrPauseSound: () => Promise<void>;
  stopSound: () => Promise<void>;
};
