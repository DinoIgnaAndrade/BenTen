export type AudioServiceType<T> = {
  sound: T | null;
  isPlaying: boolean;
  initializeSound: (uri: string) => Promise<void>;
  playOrPauseSound: () => Promise<void>;
  stopSound: () => Promise<void>;
  setLoop: (boolean: boolean) => Promise<void>;
  setMiliSecondsPosition: (position: number) => Promise<void>;
};

export type AudioFile = {
  name: string;
  uri: string;
  duration: number;
}

export type MediaData ={
  title: string | 'No title';
  artist: string | 'No artist';
  album: string | 'No album';
  genre: string | 'No genre';
  picture: string | null | undefined;
  uri: string;
  duration: number;
}

export type Time = {
  minutes: number;
  seconds: number;
}