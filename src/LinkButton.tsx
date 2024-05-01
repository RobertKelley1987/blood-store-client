import { Link } from "react-router-dom";

type LinkButtonProps = {
  text: string;
  path: string;
};

function LinkButton({ text, path }: LinkButtonProps) {
  return (
    <Link
      to={path}
      className="uppercase flex w-full justify-center px-6 py-3 border border-black text-center hover:bg-blood"
    >
      {text}
    </Link>
  );
}

export default LinkButton;
