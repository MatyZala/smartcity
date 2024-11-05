import { Dimensions, ScrollView, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

const deviceHeight = Dimensions.get("window").height;

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedScrollView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <ScrollView style={[{ backgroundColor, minHeight: deviceHeight, }, style]} {...otherProps} />;
}
