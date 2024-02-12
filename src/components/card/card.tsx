import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable, Text, View} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import {colors} from 'src/styles';
import styles from './styles';

enum Status {
  NOT_COMPLETE = 0,
  COMPLETE = 1,
}

type CardItemProps = {
  name: string;
  description: string;
  category: string;
  date: Date;
  status: Status;
  onPress: () => void;
  handleDelete: () => void;
  handleStatus: () => void;
};

const CardItem = ({
  name,
  description,
  category,
  date,
  status,
  onPress,
  handleDelete,
  handleStatus,
}: CardItemProps) => {
  const ref = useRef<Swipeable | null>(null);

  const progress = useDerivedValue(() => {
    return status === Status.NOT_COMPLETE ? withTiming(0) : withTiming(1);
  }, [status]);

  const colorAnimated = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.primary, colors.green],
    );

    return {
      backgroundColor,
    };
  });

  const rightSwipe = () => {
    const onPressHandleDelete = () => {
      handleDelete();
      ref.current?.close();
    };

    return (
      <View style={styles.leftSwipe}>
        <TouchableOpacity onPress={onPressHandleDelete}>
          <Icon name="trash" size={30} color={colors.red} />
        </TouchableOpacity>
      </View>
    );
  };

  const leftSwipe = () => {
    const onPressHandleStatus = () => {
      handleStatus();
      ref.current?.close();
    };

    return (
      <View style={styles.leftSwipe}>
        <TouchableOpacity onPress={onPressHandleStatus}>
          {status === Status.NOT_COMPLETE ? (
            <Icon name="checkmark" size={30} color={colors.green} />
          ) : (
            <Icon name="close" size={30} color={colors.red} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={rightSwipe}
      renderLeftActions={leftSwipe}
      ref={ref}>
      <Pressable onPress={onPress}>
        <Animated.View style={[styles.container, colorAnimated]}>
          <View style={styles.content}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.describe}>{description}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.describe}>{category}</Text>
            <Text style={styles.describe}>{String(date)}</Text>
          </View>
        </Animated.View>
      </Pressable>
    </Swipeable>
  );
};

export default CardItem;
