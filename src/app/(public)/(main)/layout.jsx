import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/app/components/navbar")
);
const FooterComponent = dynamic(() => import("@/app/components/footer")
);
const DrawerComponent = dynamic(() => import("@/app/components/drawer"));
const SideNavComponent = dynamic(()=> import("@/app/components/sidenav"))

const homepageLayout = ({ children }) => {
  return (
    <>
      <DrawerComponent>
        <div className="drawer-content">
          <NavbarComponent />
          {children}
          <FooterComponent />
        </div>
        <SideNavComponent />
      </DrawerComponent>
    </>
  );
};
export default homepageLayout;
