import { getStorybookUI, configure } from "@storybook/react-native";

import { loadStories } from "./storyLoader";

configure(loadStories, module);

const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });

export default StorybookUI;
