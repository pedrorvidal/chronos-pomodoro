type DefaultInputProps = {
  id: string;
  labelText?: string;
  nameInput: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ type, id, labelText, nameInput }: DefaultInputProps) {
  return (
    <>
      {labelText ? <label htmlFor={id}>{labelText}</label> : ''}
      <input type={type} id={id} name={nameInput} />
    </>
  );
}
