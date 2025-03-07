import ChangeLang from "../../ui/header/ChangeLang";
import ChangeTheme from "../../ui/header/ChangeTheme";
import HeaderLinks from "../../ui/header/HeaderLinks";
import Logo from "../../ui/header/Logo";
import LogOutButton from "../../ui/header/LogOutButton";
import SideBarHeader from "../../ui/header/SideBarHeader";
import SignupAndLogin from "../../ui/header/SignupAndLogin";

export default function Header() {
  return (
    <header className="bg-secondary py-9 relative z-10">
      <div className="container mx-auto sm:px-0 px-2 flex justify-between items-center">
        <Logo />
        <HeaderLinks />
        <div className="flex justify-between items-center gap-3">
          <ChangeTheme />
          <ChangeLang />
          <SideBarHeader />
          <div className="hidden md:block">
            <SignupAndLogin />
            <LogOutButton />
          </div>
        </div>
      </div>
    </header>
  );
}
