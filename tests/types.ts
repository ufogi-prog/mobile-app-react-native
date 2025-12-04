import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface AppState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
}

export type Action =
  | { type: ActionTypes.LOGIN_REQUEST }
  | { type: ActionTypes.LOGIN_SUCCESS; payload: User }
  | { type: ActionTypes.LOGIN_FAILURE; payload: string }
  | { type: ActionTypes.LOGOUT };