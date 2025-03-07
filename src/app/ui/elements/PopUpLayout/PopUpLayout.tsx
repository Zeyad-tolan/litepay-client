import { Dispatch, ReactNode, SetStateAction } from "react";

export type PopUpLayoutProps = {
  style?: string,
  setShow: Dispatch<SetStateAction<boolean>>,
  show: boolean,
  children: ReactNode,
  styleChildren?: string
};
export default function PopUpLayout({ style, setShow, children, show, styleChildren }: PopUpLayoutProps) {
  return (
    <>
      <div className={`fixed top-0 left-0 z-[99] w-full h-screen bg-black/25 ${style} ${show ? "block" : "hidden"}`} onClick={() => setShow(false)}>
      </div>
      <div className={`fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-[100] p-4 bg-white rounded-lg w-fit h-fit ${styleChildren} ${show ? "block" : "hidden"}`}>
        {children}
      </div>
    </>
  );
}
