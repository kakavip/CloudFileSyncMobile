import React, { useRef, useEffect } from 'react';
import { Animated, Pressable, ViewStyle } from 'react-native';

interface Props {
  size?: number;
  backgroundColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
  borderWidth?: number;
  borderColor?: string;
}

const AnimatedCircleButton = ({
  size = 60,
  backgroundColor = '#007AFF',
  onPress = () => {},
  style = {},
  children,
  borderWidth = 2,
  borderColor = '#007AFF',
}: Props) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const dotOpacity = useRef(new Animated.Value(0)).current;
  const dotRotations = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];
  const animationRefs = useRef<Animated.CompositeAnimation[]>([]);

  const startAnimation = () => {
    // Reset animations
    dotRotations.forEach(rotation => rotation.setValue(0));
    dotOpacity.setValue(1);
    
    // Create different speed rotations for each dot
    const durations = [2000, 2000, 2000]; // Different speeds for each dot
    
    animationRefs.current = dotRotations.map((rotation, index) => 
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: durations[index],
          useNativeDriver: true,
        })
      )
    );

    // Start all animations
    animationRefs.current.forEach(anim => anim.start());

    // Scale down animation
    Animated.spring(scaleAnim, {
      toValue: 0.85,
      useNativeDriver: true,
      speed: 50,
      bounciness: 5,
    }).start();
  };

  const stopAnimation = () => {
    // Stop all rotation animations
    animationRefs.current.forEach(anim => anim.stop());

    // Hide dots
    Animated.timing(dotOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // Scale back up
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 5,
    }).start();

    onPress();
  };

  useEffect(() => {
    // Cleanup animations on unmount
    return () => {
      animationRefs.current.forEach(anim => anim.stop());
    };
  }, []);

  const spins = dotRotations.map(rotation => 
    rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
  );

  return (
    <Animated.View style={{ position: 'relative' }}>
      {/* Three dots with different rotation speeds */}
      {[0, 10, 20].map((angle, index) => {
        const radian = (angle * Math.PI) / 180;
        const radius = size / 2;
        return (
          <Animated.View
            key={index}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              opacity: dotOpacity,
              transform: [{ rotate: spins[index] }]
            }}
          >
            <Animated.View
              style={{
                position: 'absolute',
                width: 6,
                height: 6,
                backgroundColor: 'red',
                borderRadius: 3,
                left: radius + Math.cos(radian) * radius - 3,
                top: radius + Math.sin(radian) * radius - 3,
              }}
            />
          </Animated.View>
        );
      })}

      {/* Main button */}
      <Animated.View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth,
        borderColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Pressable 
          onPressIn={startAnimation}
          onPressOut={stopAnimation}
        >
          <Animated.View
            style={[
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ scale: scaleAnim }],
              },
              style,
            ]}
          >
            <Animated.Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {children}
            </Animated.Text>
          </Animated.View>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

AnimatedCircleButton.defaultProps = {
  size: 60,
  backgroundColor: '#007AFF',
  onPress: () => {},
  style: {},
  children: null,
  borderWidth: 2,
  borderColor: '#007AFF',
};

export default AnimatedCircleButton;