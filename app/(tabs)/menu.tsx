import { SafeAreaView } from "react-native"
import Navbar from "../navbar"
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView"

const MenuTab = () => {
    return (
        <ThemedSafeAreaView>
            <Navbar/>
        </ThemedSafeAreaView>
    )
}

export default MenuTab