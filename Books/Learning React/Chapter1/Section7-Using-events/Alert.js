import { useState } from "react";

export function Alert({
  type = "information",
  heading,
  children,
  closable,
  onClose
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  /**
   * This may seem a little strange because we have put the handleCloseClick function inside another function, Alert.
   * The handler needs to be inside the Alert function; otherwise, the alert component won’t have access to it.
   */
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  /* This is an alternative to the above */
  // const handleCloseClick = () => {
  //   setVisible(false);
  //   if (onClose) {
  //     onClose();
  //   }
  // }

  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}
