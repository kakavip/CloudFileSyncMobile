import { useTheme } from '@/hooks';
import React from 'react';
import { Text, View } from 'react-native';

const Folders = () => {
  const { Layout } = useTheme();
  return (
    <>
      <Text
        style={[
          Layout.fill,
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
        ]}
      >
        Folders Page
      </Text>
    </>
  );
};

export default Folders;
