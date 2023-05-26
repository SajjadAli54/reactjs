let components = [
  {
    title: "Home",
    content: "Rendered Home Component",
    route: "/",
  },
  {
    title: "Test1",
    content: "Rendered Test1 Component",
    route: "/test1",
  },
  {
    title: "Test2",
    content: "Rendered Test2 Component",
    route: "/test2",
  },
  {
    title: "Test3",
    content: "Rendered Test3 Component",
    route: "/test3",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          title: `Test${state.length}`,
          content: `Render Test ${state.length} component`,
          route: `/route${state.length}`,
        },
      ];
    default:
      return state;
  }
};

export { components, reducer };
