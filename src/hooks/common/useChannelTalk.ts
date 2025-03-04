import { useEffect } from "react";

import ChannelService from "@/components/ChannelTalk/channelTalk";

export const useChannelTalk = () => {
  const openChannelTalk = () => {
    ChannelService.showMessenger();
  };

  useEffect(() => {
    ChannelService.loadScript();

    ChannelService.boot({
      pluginKey: import.meta.env.VITE_CHANNEL_TALK_KEY || "",
      hideChannelButtonOnBoot: true,
    });
  }, []);

  return { openChannelTalk };
};
