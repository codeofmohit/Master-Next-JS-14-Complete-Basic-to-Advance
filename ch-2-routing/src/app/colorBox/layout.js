const layout = ({ children, left, right }) => {
  const isSidebar = false;
  return (
    <>
      {children}
      {isSidebar ? left : right}
    </>
  );
};
export default layout;
