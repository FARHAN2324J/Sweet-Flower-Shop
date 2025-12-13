interface BtnProps {
  children: React.ReactNode;
}

const Button = ({ children }: BtnProps) => {
  return (
    <button className="px-3 pt-2 pb-1.5 flex items-center gap-2 bg-(--Accent5) rounded-sm uppercase">
      <span
        className="bg-(--Link) rounded-full w-1 h-1"
        aria-hidden="true"
      />
      <span className="Caption1 text-(--Link)">{children}</span>
    </button>
  );
};

export default Button;
