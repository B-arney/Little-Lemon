import { View, Text } from "react-native";
import * as React from "react";

export default function Logo({ title, ...props} : LogoProps) {
  return (
    <View>
      <Text className="text-3xl text-primary font-serif text-foreground">{title}</Text>
    </View>
  );
}

type LogoProps = React.ComponentProps<typeof Text> & { title: string };
