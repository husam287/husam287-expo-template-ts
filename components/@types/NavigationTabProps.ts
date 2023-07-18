import { FC, ReactNode } from "react";
import { ViewProps } from "react-native";

export interface NavigationTabProps {
    focused: boolean,
    title: string,
    tabWidth: number,
    color?: string,
    size?: number,
    iconComponent: ReactNode
}