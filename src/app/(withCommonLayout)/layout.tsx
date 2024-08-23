import MainNav from "@/shared/MainNav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNav/>
      <div className="min-h-screen">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
