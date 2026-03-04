interface Props {
  btn: string;
  btnWidth: string;
  onClick?: () => void;
}

function ButtonPrimary({ btn, btnWidth, onClick }: Props) {
  return (
    <button className={`bg-(--primary-color) text-white py-3 px-6 rounded-lg cursor-pointer transition-colors ${btnWidth}`} onClick={onClick}>
      {btn}
    </button>
  );
}

export default ButtonPrimary;
