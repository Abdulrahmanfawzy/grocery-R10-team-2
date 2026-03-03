interface Props {
  btn: string;
  btnWidth: string;
}

function ButtonPrimary({ btn, btnWidth }: Props) {
  return (
    <button className={`bg-(--primary-color) text-white py-3 px-6 rounded-lg ${btnWidth}`}>
      {btn}
    </button>
  );
}

export default ButtonPrimary;
