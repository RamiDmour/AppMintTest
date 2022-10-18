import { MyTheme } from '../navigation/MyTheme';

declare module '@react-navigation/native' {
  export function useTheme(): typeof MyTheme;
}
