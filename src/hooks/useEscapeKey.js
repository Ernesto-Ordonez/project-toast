import React from "react";

export default function useEscapeKey(action) {
  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code !== "Escape") return;
      action();
      return;
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [action]);

  return;
}
