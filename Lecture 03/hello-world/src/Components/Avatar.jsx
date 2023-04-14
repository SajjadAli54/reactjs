const PI = 3.14;

function Avatar(props) {
  const { url, alt } = props;
  const style = {
    margin: "10px",
  };
  return (
    <>
      <img src={url} alt={alt} style={style} />
    </>
  );
}

function Avatar2() {
  return (
    <>
      <img
        src="https://picsum.photos/20/30"
        width={20}
        height={20}
        alt="Avatar"
      />
      {/* <p>This is commened p</p> */}
      <p>{PI}</p>
    </>
  );
}

export function UseAvatars() {
  let isLogged = true;
  return (
    <div className="App">
      {isLogged ? (
        <Avatar
          url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Sun set image"
        />
      ) : (
        <Avatar2
          url="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png"
          alt="Logo image"
        />
      )}
    </div>
  );
}
