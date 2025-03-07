import CopyrightFooter from "../../ui/footer/CopyrightFooter";
import FollowUsFooter from "../../ui/footer/FollowUsFooter";
import LinksFooter from "../../ui/footer/LinksFooter";
import LogoFooter from "../../ui/footer/LogoFooter";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-9 sm:pb-0 pb-9">
      <div className="container mx-auto sm:px-0 px-2 ">
        <div className="flex sm:flex-row flex-col justify-between sm:items-start items-center sm:gap-0 gap-4">
          <LogoFooter />
          <div className="sm:block hidden">
            <LinksFooter />
          </div>
          <div className="sm:hidden block sm:w-fit w-full">
            <FollowUsFooter />
          </div>
        </div>
        <hr className="mt-4 sm:mb-0 mb-4" />
        <div className="hidden sm:flex justify-between py-9">
          <CopyrightFooter />
          <FollowUsFooter />
        </div>
        <div className="sm:hidden block">
          <LinksFooter />
        </div>
      </div>
    </footer>
  );
}
