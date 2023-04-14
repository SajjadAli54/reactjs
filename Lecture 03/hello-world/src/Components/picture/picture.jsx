export function Picture(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} width={300} height={200} />
      {props.children}
    </div>
  );
}
