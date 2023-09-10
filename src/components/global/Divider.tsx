import React from "react";

type Props = {
  color?: string;
};

export default function Divider({ color = "gray" }: Props) {
  return <hr className={`my-2 border-t border-${color}-200 w-full`} />;
}
