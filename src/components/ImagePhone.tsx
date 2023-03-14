import phoneBg from "../assets/images/bg-sidebar-mobile.svg";

export default function ImagePhone() {
  return (
    <div className={`absolute  top-0 z-0 h-40 w-full md:hidden md:h-64`}>
      <img src={phoneBg} alt="" className="max-h-full w-full object-cover" />
    </div>
  );
}
