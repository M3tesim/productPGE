function List(props) {
  const { brand } = props;
  return (
    <div>
      {props.brand.map((item, index) => (
        <>
          <h3>{item}</h3>
          <div className="wrapper">
            {props.brand.map((item, index) => (
              <div key={index} className="item">
                {item}
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default List;
