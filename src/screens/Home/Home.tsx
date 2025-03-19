import { useTheme } from '@/hooks';
import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  const { Layout } = useTheme();

  return (
    <Fragment>
      <View
        style={[
          Layout.fill,
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}
      >
        <View style={{ backgroundColor: 'red' }}>
          <Text>Hello, World!</Text>
        </View>
      </View>
    </Fragment>
  );
};

export default Home;
