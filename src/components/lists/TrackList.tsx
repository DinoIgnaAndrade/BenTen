//Modules Imports
import { FlatList } from 'react-native'
import React from 'react'
//Components
import Card from '../cards/Card';
//Hooks
import { MediaData } from '@/types/Types';
import { useAppSelector } from '@/hooks/ReduxHooks';

type Props = {
  audioFiles?: MediaData[];
  text?: string[];
  category?: string;
  setTrackHandler?: ({ track }: { track: MediaData }) => void;
  setQueueHandler?: () => void;
}

const TrackList: React.FC<Props> = ({ audioFiles, text, category, setTrackHandler, setQueueHandler }) => {
  const uri:string = useAppSelector(state => state.player.uri);
  return (
    <>
      {
        text 
         ? 
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ backfaceVisibility: 'hidden', backgroundColor: 'transparent' }}
          data={text}
          renderItem={({ item }) => <Card category={category} text={item} />}
          keyExtractor={(item) => item}
          />
        :
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ backfaceVisibility: 'hidden', backgroundColor: 'transparent' }}
          data={audioFiles}
          renderItem={({ item }) => <Card track={item} setTrackHandler={setTrackHandler} setQueueHandler={setQueueHandler}/>}
          keyExtractor={(item) => item.uri}
        />
      }

    </>
  )
}

export default TrackList;