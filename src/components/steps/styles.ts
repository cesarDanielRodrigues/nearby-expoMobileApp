import { StyleSheet } from "react-native";
import {colors, fontFamily} from "@/styles/theme"
import { red } from "react-native-reanimated/lib/typescript/Colors";


export const s = StyleSheet.create({
    container:{
        gap: 24,
        flex: 1
    },
    title:{
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    }
})