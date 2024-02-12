import React, {ReactElement, useCallback, useEffect} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import Toast from 'react-native-toast-message';

import {CardItem, Divider, FloatButton} from 'src/components';
import styles from './styles';

import {useAppDispatch, useAppSelector} from 'src/store/hook';
import {homeActions as actions} from 'src/store/features/home/slice';
import {getTasks, refresh} from 'src/store/features/home/selector';

type FormData = {
  id?: string;
  name: string;
  description: string;
  category: string;
};

type RootStackParamList = {
  HomeList: {
    addOrEdit: 'add' | 'edit' | undefined;
  };
  Form: FormData;
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

const Home = ({route, navigation}: Props) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(getTasks);
  const refreshing = useAppSelector(refresh);
  const {addOrEdit} = route.params ?? {addOrEdit: undefined};

  useEffect(() => {
    dispatch(actions.getTasks());
  });

  useEffect(() => {
    if (refreshing) {
      dispatch(actions.loadMore());
    }
  }, [dispatch, refreshing]);

  useEffect(() => {
    if (addOrEdit === 'add') {
      Toast.show({
        type: 'success',
        text1: 'Task added',
        visibilityTime: 1500,
      });
    }
    if (addOrEdit === 'edit') {
      Toast.show({
        type: 'info',
        text1: 'Task updated',
        visibilityTime: 1500,
      });
    }
  }, [addOrEdit]);

  const loadMore = useCallback(() => {
    dispatch(actions.loadMore());
  }, [dispatch]);

  const handleDelete = (id: string, name: string) => () => {
    Alert.alert('Delete', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(actions.removeTask(id));
          Toast.show({
            type: 'error',
            text1: `Task ${name} removed`,
            visibilityTime: 1500,
          });
        },
      },
    ]);
  };

  const handleStatus = (id: string) => () => {
    dispatch(actions.updateStatusTask(id));
    Toast.show({
      type: 'info',
      text1: 'Status updated',
      visibilityTime: 1500,
    });
  };

  const addTask = () => {
    navigation.navigate('Form', {
      name: '',
      description: '',
      category: '',
    });
  };

  const updateTask = (task: ItemProps) => () => {
    if (task !== undefined) {
      return navigation.navigate('Form', {...task});
    }
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
        onPress={updateTask(item)}
        handleDelete={handleDelete(item.id, item.name)}
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadMore} />
        }
      />
      <FloatButton name="add" onPress={addTask} />
      <Toast />
    </SafeAreaView>
  );
};

export default Home;
