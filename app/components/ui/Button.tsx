import { cn } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 focus:ring-primary",
    outline: "border border-primary text-primary hover:bg-blue-100 focus:ring-primary",
    ghost: "text-primary bg-transparent hover:bg-blue-50 focus:ring-primary",
  };

  return (
    <button className={cn(baseStyles, variants[variant])} {...props}>
      {children}
    </button>
  );
};

export default Button;
