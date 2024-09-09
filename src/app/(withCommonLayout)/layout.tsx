import Subscribe from "@/components/client/Subscribe";
import Footer from "@/shared/Footer/Footer";
import MainNav from "@/shared/MainNav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNav />
      <div>{children}</div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default CommonLayout;
