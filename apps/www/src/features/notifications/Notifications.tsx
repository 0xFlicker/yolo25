"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { useNotifications, type Notification } from "./Context";
import { Snackbar } from "./Snackbar";

export const Notifications: FC = () => {
  const { notifications, removeNotification } = useNotifications();
  const [messageInfo, setMessageInfo] = useState<Notification | null>(null);

  const handleClose = useCallback(() => {
    if (messageInfo) {
      removeNotification(messageInfo.id);
    }
    setMessageInfo(null);
  }, [messageInfo, removeNotification]);

  useEffect(() => {
    if (notifications.length > 0 && !messageInfo) {
      const topTransaction = notifications[0];
      setMessageInfo(topTransaction);
      removeNotification(topTransaction.id);
    }
  }, [notifications, messageInfo, removeNotification]);

  return (
    <Snackbar
      key={messageInfo?.id}
      open={messageInfo !== null}
      autoHideDuration={messageInfo?.autoHideMs}
      onClose={handleClose}
      message={messageInfo?.message}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      style={{
        // translate down 50px to avoid the header
        top: "80px",
      }}
    />
  );
};
