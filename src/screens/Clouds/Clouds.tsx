import { useTheme } from '@/hooks';
import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

const Clouds = () => {
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
          <Text>Clouds page</Text>
        </View>
      </View>
    </Fragment>
  );
};

export default Clouds;
