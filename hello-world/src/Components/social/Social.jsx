import React, { useEffect, useState } from "react";

export default function Social() {
  const [resourceType, setResourceType] = useState(() => "posts");
  const [items, setItems] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  /**
   * useEffect as componentDidMount
   *  - useEffect(() => {}, [])
   */
  useEffect(() => {
    console.log("onMount");
    window.addEventListener("resize", handleResize);

    // clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * useEffect as componentDidUpdate
   * - useEffect(() => {}, [resourceType])
   * - useEffect(() => {}, [resourceType, anotherState])
   */
  useEffect(() => {
    console.log("onUpdate");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  /**
   * useEffect as componentWillUnmount
   * - useEffect(() => { return () => {} }, [])
   */
  useEffect(() => {
    return () => {
      console.log("onUnmount");
    };
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>Window Width: {windowWidth}</h1>
      <h1>{resourceType}</h1>
      {resourceType === "posts" && <Posts items={items} />}
      {resourceType === "users" && <Users items={items} />}
      {resourceType === "comments" && <Comments items={items} />}
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

function Users({ items }) {
  return (
    <>
      {items.map((item) => {
        const { id, name, username, email, address, phone, website, company } =
          item;
        const { street, suite, city, zipcode, geo } = address;
        const { lat, lng } = geo;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>
              Address: {street}, {suite}, {city}, {zipcode}
            </p>
            <p>
              Latitude: {lat}, Longitude: {lng}
            </p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
            <p>Catchphrase: {company.catchPhrase}</p>
            <p>Business: {company.bs}</p>
          </div>
        );
      })}
    </>
  );
}

function Posts({ items }) {
  return (
    <>
      {items.map((item) => {
        const { id, title, body } = item;

        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}

function Comments({ items }) {
  return (
    <>
      {items.map((item) => {
        const { id, name, email, body } = item;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}
