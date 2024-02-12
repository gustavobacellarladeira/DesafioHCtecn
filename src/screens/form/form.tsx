import React, {useEffect} from 'react';
import {KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RectButton} from 'react-native-gesture-handler';
import * as yup from 'yup';
import {Formik} from 'formik';

import {formActions as actions} from 'src/store/features/form/slice';
import {useAppDispatch} from 'src/store/hook';

import styles from './styles';

type RootStackParamList = {
  HomeList: {
    addOrEdit: 'add' | 'edit' | undefined;
  };
  Form: {
    id: string;
    name: string;
    description: string;
    category: string;
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Form'>;

type FormData = {
  id?: string;
  name: string;
  description: string;
  category: string;
};

const scheme = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required'),
});

const Form = ({route, navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {id, name, description, category} = route.params;

  useEffect(() => {
    if (id !== undefined) {
      dispatch(actions.loadTask(id));
    }
  }, [dispatch, id]);

  const initialValues = {
    name: name ?? '',
    description: description ?? '',
    category: category ?? '',
  };

  const onSubmit = (formData: FormData) => {
    if (id !== undefined) {
      dispatch(actions.updateTask({task: formData, id}));
      navigation.navigate('HomeList', {
        addOrEdit: 'edit',
      });
    } else {
      dispatch(actions.createTask(formData)),
        navigation.navigate('HomeList', {
          addOrEdit: 'add',
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <Formik
          validationSchema={scheme}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            values,
            errors,
          }) => (
            <>
              <Text style={styles.placeholder}>Name for Task</Text>
              <TextInput
                style={styles.textInput}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {errors.name && touched.name && (
                <Text style={styles.messageError}>{errors.name}</Text>
              )}
              <Text style={styles.placeholder}>Description</Text>
              <TextInput
                style={styles.textInput}
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
              />
              {errors.description && touched.description && (
                <Text style={styles.messageError}>
                  {errors.description ?? ''}
                </Text>
              )}
              <Text style={styles.placeholder}>Category</Text>
              <TextInput
                style={styles.textInput}
                value={values.category}
                onChangeText={handleChange('category')}
                onBlur={handleBlur('category')}
              />
              {errors.category && touched.category && (
                <Text style={styles.messageError}>{errors.category}</Text>
              )}
              <RectButton style={styles.button} onPress={handleSubmit}>
                <Text style={styles.textButton}>
                  {id === undefined ? 'Add' : 'Edit'} Task
                </Text>
              </RectButton>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Form;
