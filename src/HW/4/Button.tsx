type ButtonPropsType = {
  callBack: () => void;
  name: string;
};

export const Button = ({ callBack, name }: ButtonPropsType) => {
  // const callBackHandler = () => {
  //   // НУЖНО ДОПИСАТЬ
  // };

  return (
    <button id={"hw04-button"} onClick={callBack}>
      {name}
    </button>
  );
};
