import { PressableProps } from 'react-native';

export type CounterButtonProps = PressableProps & { icon: any };

export type CounterProps = {
  value?: number;
  minValue?: number;
  maxValue?: number;
  onChange: (newValue: number) => void;
};
