import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetPostsQuery } from '../../api/posts/postsApi';
export const MainScreen = () => {
  const { data, isLoading } = useGetPostsQuery();
  console.log(isLoading);
  function renderBody() {
    if (isLoading) {
      return <ActivityIndicator />;
    } else {
      return (
        <FlatList
          data={data}
          renderItem={({ item: post }) => <Text>{post.title}</Text>}
        />
      );
    }
  }
  return <SafeAreaView>{renderBody()}</SafeAreaView>;
};
