import { useRouteError } from "react-router-dom";

type Props = {};

export default function ErrorPage({}: Props) {
  // const error = useRouteError(); // can only be used with data router I think?
  // console.error(error);
  return (
    <div className="bg-slate-500 h-screen">
      <div className="text-slate-100">Oh noezz!! I can't find the page you're looking for :((</div>
      <div>{"<(^^<)"}</div>
    </div>
  );
}
