import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';

export default function Login() {
    return (
        <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>RM</Text>
      <Text>Senha</Text>
      <Link href="/" asChild>
      <Pressable>
        <Text>Login</Text>
      </Pressable>
    </Link>
    </View>
    )
}