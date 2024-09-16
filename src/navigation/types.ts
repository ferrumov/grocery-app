import type { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParams = {
  Home: undefined;
  CreateItem: undefined;
  EditItem: { id: string };
};

export type HomeStackProps = {
  List: undefined;
  CreateItem: undefined;
  EditItem: { id: string };
};

export type StackProps<T extends ParamListBase, V extends keyof T> = NativeStackScreenProps<T, V>;
