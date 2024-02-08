import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  isDismissable?: boolean;
  onClickButton: () => void;
}
function renderDismissButton(isDismissable: boolean, onclick: Function) {
  if (isDismissable) {
    return (
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          onclick();
        }}
      ></button>
    );
  }
}

const Alert = ({
  children,
  isDismissable = false,
  onClickButton,
}: AlertProps) => {
  return (
    <>
      <div
        className={
          "alert alert-warning" +
          (isDismissable ? " alert-dismissible fade show" : "")
        }
        role="alert"
      >
        {children}
        {renderDismissButton(isDismissable, onClickButton)}
      </div>
    </>
  );
};

export default Alert;
