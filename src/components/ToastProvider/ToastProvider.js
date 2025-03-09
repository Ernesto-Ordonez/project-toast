import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    (newToast) => setToasts((prevToasts) => [...prevToasts, newToast]),
    []
  );

  const handleDismiss = React.useCallback(
    (id) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    },
    [toasts]
  );

  const context = React.useMemo(
    () => ({
      toasts,
      addToast,
      handleDismiss,
    }),
    [toasts, addToast, handleDismiss]
  );

  const handleDismissAll = React.useCallback(() => setToasts([]), []);

  useEscapeKey(handleDismissAll);

  return (
    <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
