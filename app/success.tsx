import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message } from "@components/Message";

import successIMG from "@assets/images/success.png";
import { useTheme } from "styled-components/native";

export default function Success() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray7 }}>
      <Message
        title="Continue assim!"
        btnTitle="Ir para a página inicial"
        subtitle="Você continua dentro da dieta. Muito bem!"
        image={successIMG}
      />
    </SafeAreaView>
  );
}
