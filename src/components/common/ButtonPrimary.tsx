interface Props {
  btn: string;
  btnWidth: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

function ButtonPrimary({ btn, btnWidth, onClick, icon }: Props) {
  return (
    <button
      className={`flex justify-center bg-(--primary-color) text-white py-3 px-6 rounded-lg cursor-pointer transition-colors ${btnWidth}`}
      onClick={onClick}>
      <span className="flex items-center gap-2">
        {icon && icon}
        {btn}
      </span>
    </button>
  );
}

export default ButtonPrimary;
