export type AudioServiceType<T> = {
  sound: T | null;
  isPlaying: boolean;
  initializeSound: (uri: string) => Promise<void>;
  playOrPauseSound: () => Promise<void>;
  stopSound: () => Promise<void>;
};

export type AudioFile = {
  name: string;
  uri: string;
}