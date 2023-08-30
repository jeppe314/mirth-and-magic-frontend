import React from "react";

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <div className="bg-slate-500 h-screen">
      <div className="text-slate-100">Oh noezz!! I can't find the page you're looking for :((</div>
      <div>{"<(^^<)"}</div>
    </div>
  );
}
