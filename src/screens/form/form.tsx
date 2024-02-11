import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {RectButton} from 'react-native-gesture-handler';
import {formActions as actions} from 'src/store/features/form/slice';
import {useAppDispatch, useAppSelector} from 'src/store/hook';
import styles from './styles';
import {getActionCompleted} from 'src/store/features/form/selector';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeList: undefined;
  Form: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Form'>;

type FormData = {
  name: string;
  description: string;
  category: string;
};

const scheme = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required'),
});

const initialValues = {
  name: '',
  description: '',
  category: '',
};

const Form = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const actionCompleted = useAppSelector(getActionCompleted);

  const onSubmit = (formData: FormData) => {
    dispatch(actions.createTask(formData));
    navigation.navigate('HomeList');
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
                <Text style={styles.textButton}>Add Task</Text>
              </RectButton>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Form;
