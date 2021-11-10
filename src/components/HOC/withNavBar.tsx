import { NavBar } from "../molecules/NavBar";

const withNavBar = (Component: React.ComponentType) => {
  const WithNavBarHoc = (props: any) => {
    return (
      <>
        <NavBar />
        <Component {...props} />
      </>
    );
  };
  WithNavBarHoc.displayName = `withNavBar(${
    Component.displayName ?? Component.name
  })`;
  return WithNavBarHoc;
};

export { withNavBar };
