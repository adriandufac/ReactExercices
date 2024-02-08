import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger"; // ? signifie prop optionnelle / utilisation de TS pour limiter color aux strings écrits ici (un peu comme une enum ? ), TS ne nous laissera pas compiler si pas ces valeurs
  clickFunction: () => void;
}

const Button = ({
  children,
  clickFunction,
  color = "primary", // color aura pour valeur par default primary (si non précisée)
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
};

export default Button;
