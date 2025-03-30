import { useTheme } from '@/hooks';
import { AnimatedCircleButton } from '@/components';
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
        <AnimatedCircleButton
          size={180}
          backgroundColor="#007AFF"
          style={{}}
          onPress={() => console.log('Button pressed!')}
        >
          <Text style={{ color: 'white', fontSize: 30 }}>Sync</Text>
        </AnimatedCircleButton>
      </View>
    </Fragment>
  );
};

export default Home;
