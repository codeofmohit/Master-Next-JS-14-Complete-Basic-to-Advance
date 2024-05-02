import Header from "@/components/Header";

const layout = ({ children }) => {
  return (
    <section>
      {<Header />}
      {children}
    </section>
  );
};
export default layout;
