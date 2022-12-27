import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { ReactNode } from "react"

export type RootStackParamList = {
    Main: {id: string, title: string, icon: ReactNode},
    Rating: {id: string, title: string, icon: ReactNode},
    SelectNumber: undefined
}

export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>
export type RatingProps = NativeStackScreenProps<RootStackParamList, 'Rating'>
export type SelectNumberProps = NativeStackScreenProps<RootStackParamList, 'SelectNumber'>