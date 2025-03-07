/* eslint-disable @next/next/no-img-element */
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  src: string;
}

export default function PopUpImage({setShow,show,src}: Props) {
  return (
    <PopUpLayout setShow={setShow} show={show} styleChildren="w-auto !bg-transparent">
      <div className="!h-screen py-5 bg-transparent">
        <img onClick={() => setShow(false)} src={src} alt="img" className="w-full !h-[100%] object-contain" />
      </div>
    </PopUpLayout>
  );
}
