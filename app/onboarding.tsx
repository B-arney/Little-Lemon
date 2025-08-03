import * as React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function Screen() {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      className="h-full gap-5 p-6 bg-secondary/30"
    >
      <Text className="mt-16 mb-32 text-3xl">Let us get to know you</Text>
      <Text className="text-2xl mb-4">First Name</Text>
      <Input className="mb-4" />
      <Text className="text-2xl mb-4">Email</Text>
      <Input keyboardType="email-address" />
      <Button className="w-32 mt-64 left-20" size="lg">
        <Text className="text-3xl p-0">Next</Text>
      </Button>
    </ScrollView>
  );
}
