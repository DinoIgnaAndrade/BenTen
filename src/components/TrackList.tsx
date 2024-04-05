//Modules Imports
import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
//Components
import Card from './cards/Card';
//Hooks
import { MediaData } from '@/types/Types';

type Props = {
  audioFiles?: MediaData[];
  text?: string[];
  category?: string;
}

const TrackList: React.FC<Props> = ({ audioFiles, text, category }) => {
  return (
    <>
      {
        text && !audioFiles
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
          renderItem={({ item }) => <Card track={item} />}
          keyExtractor={(item) => item.uri}
        />
      }

    </>
  )
}

export default TrackList;