const Sum = (totalRef, setTotal, setAction) => {
  console.log(totalRef.current.value);
  const inputValue = totalRef.current.value;
  setTotal(previous => {
    return (previous += parseInt(inputValue));
  });
  setAction(`Plus ${totalRef.current.value}`);
  totalRef.current.value = 0;
};
const Op = (totalRef, setTotal, setAction, name) => {
  switch (name) {
    case 'Sum':
      return Sum(totalRef, setTotal, setAction);
  }
};
export default { Sum };
