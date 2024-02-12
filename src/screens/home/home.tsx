import React, {ReactElement, useEffect} from 'react';
import {Alert, FlatList, ListRenderItemInfo} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {CardItem, Divider, FloatButton} from 'src/components';
import styles from './styles';

import {useAppDispatch} from 'src/store/hook';
import {homeActions as actions} from 'src/store/features/home/slice';
import {getTasks, refresh} from 'src/store/features/home/selector';

type RootStackParamList = {
  HomeList: undefined;
  Form: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'HomeList'>;

type ItemProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  date: Date;
  status: number;
};

const Home = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const tasks = useSelector(getTasks);
  const refreshing = useSelector(refresh);

  useEffect(() => {
    dispatch(actions.getTasks());
  });

  useEffect(() => {
    if (refreshing) {
      dispatch(actions.loadMore());
    }
  }, [dispatch, refreshing]);

  const handleDelete = (id: string) => () => {
    Alert.alert('Delete', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(actions.removeTask(id));
        },
      },
    ]);
  };

  const handleStatus = (id: string) => () => {
    dispatch(actions.updateStatusTask(id));
  };

  const addItem = () => {
    navigation.navigate('Form');
  };

  const renderItem: (
    info: ListRenderItemInfo<ItemProps>,
  ) => ReactElement | null = ({item, index}) => {
    return (
      <CardItem
        key={index}
        name={item.name}
        description={item.description}
        category={item.category}
        date={item.date}
        status={item.status}
        onPress={() => {}}
        handleDelete={handleDelete(item.id)}
        handleStatus={handleStatus(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
        extraData={tasks}
      />
      <FloatButton name="add" onPress={addItem} />
    </SafeAreaView>
  );
};

export default Home;
