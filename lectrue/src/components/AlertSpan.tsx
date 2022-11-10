interface Props {
  name: string;
  value: string;
}

const AlertSpan = ({ name, value }: Props) => {
  return <span onClick={() => alert(value)}>{name}</span>;
};

export default AlertSpan;
