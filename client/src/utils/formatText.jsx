const formatText = (text) => {
  const textArr = text.split("\n");

  return (
    <p>
      {textArr[0]}
      <br />
      {textArr[1]}
    </p>
  );
};

export default formatText;
