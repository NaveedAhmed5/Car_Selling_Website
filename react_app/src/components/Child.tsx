function Child(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Hi I am Child:</h1>
      {props.children}
    </>
  );
}

export default Child;
