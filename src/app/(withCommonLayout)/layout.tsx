import { MainNavbar } from "@/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNavbar />
      <div className="min-h-screen">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
