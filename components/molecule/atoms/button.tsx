import React, { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  return <button {...props}>{props.children}</button>;
}
