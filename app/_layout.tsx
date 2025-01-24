import {TabList, Tabs, TabSlot, TabTrigger} from 'expo-router/ui';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Tabs>
      <TabSlot/>
      <TabList>
        <TabTrigger name="dynamic page 1" href="/test1"/>
        <TabTrigger name="dynamic page 2" href="/test2"/>
      </TabList>
    </Tabs>
  );
}
