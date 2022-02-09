function List(props) {
  return (
    <div>
      <ol>
        {props.brand.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default List;
