import Image from "next/image";
import { signInAction } from "../../../lib/actions";
import Google from "../../../public/search.png";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button
        type="submit"
        className={`cool-button text-[#333333] shadowbutton font-semibold w-fit  text-medium px-12 py-3 max-sm:w-full max-sm:text-center max-sm:text-[10px] max-sm:px-[3vw] max-sm:py-2 bg-[#c09001] rounded-[25px] flex flex-row items-center gap-2 `}
      >
        <Image src={Google} alt="google" width="20" height="20" />
        <span>Sign In With Google</span>
      </button>
    </form>
  );
}
