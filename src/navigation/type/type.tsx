import type { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Main: {id: number},
    Rating: {id: number, route?: string},
    SelectNumber: {id: number, route?: string},
    Verification: {id: number, route?: string},
    Consent: {id: number, route?: string},
    Success: {id: number, route?: string}
}

export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>
export type RatingProps = NativeStackScreenProps<RootStackParamList, 'Rating'>
export type SelectNumberProps = NativeStackScreenProps<RootStackParamList, 'SelectNumber'>
export type VerificationProps = NativeStackScreenProps<RootStackParamList, 'Verification'>
export type ConsentProps = NativeStackScreenProps<RootStackParamList, 'Consent'>
export type SuccessProps = NativeStackScreenProps<RootStackParamList, 'Success'>