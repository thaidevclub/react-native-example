import type { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Main: {id: number},
    Rating: {id: number, route?: number},
    SelectNumber: {id: number, route: number},
    Verification: {id: number, route: number},
    Consent: {id: number, route: number},
    Success: {id: number, route: number},
    TestHome: {id: number, route: number},
    Detail: {id: number, route: number}
}

export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>
export type RatingProps = NativeStackScreenProps<RootStackParamList, 'Rating'>
export type SelectNumberProps = NativeStackScreenProps<RootStackParamList, 'SelectNumber'>
export type VerificationProps = NativeStackScreenProps<RootStackParamList, 'Verification'>
export type ConsentProps = NativeStackScreenProps<RootStackParamList, 'Consent'>
export type SuccessProps = NativeStackScreenProps<RootStackParamList, 'Success'>

export type TestHomeScreenProps = NativeStackScreenProps<RootStackParamList, 'TestHome'>
export type TestDetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>