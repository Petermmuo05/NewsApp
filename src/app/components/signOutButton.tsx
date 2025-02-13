import { signOutAction } from "../../../lib/actions";

export default function SignOut() {
  return (
    <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="flex w-full flex-row items-center rounded-lg  hover:bg-red-400 hover:text-white hover:font-semibold  px-2 py-2 justify-between"
      >
        <div className="flex-row pl-3 flex items-center">
          <span>Log Out</span>
        </div>{" "}
      </button>
    </form>
  );
}
