import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message } from "@components/Message";
import failedIMG from "@assets/images/failed.png";
import { useTheme } from "styled-components/native";

export default function Error() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray7 }}>
      <Message
        title="Que pena!"
        btnTitle="Ir para a página inicial"
        subtitle="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        image={failedIMG}
      />
    </SafeAreaView>
  );
}
