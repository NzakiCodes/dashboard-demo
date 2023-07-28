"use client"
import { Component, ComponentProps, ReactNode, useState } from "react";
import { Card, ChevronDown, HomeIcon, Money, UserCircle } from "./atoms/icons";
import Button from "./atoms/button";
import Link from "next/link";
import { MenuLinksProps } from "@/types";





const SidebarMenuButton = ({
  link,
  subChildren,
  isParent,
  icon,
  label,
}: {
  isParent: boolean;
  subChildren?: MenuLinksProps[];
  link: string;
  icon?: JSX.Element;
  label: string;
}) => {
    const [show, toggleShow] = useState<boolean>(false)
  if (!isParent) {
    return (
      <Link
        href={link}
        className="flex gap-x-2 py-3 px-3 rounded-full hover:bg-black/10 my-2 transition-all"
      >
        {icon}
        <span>{label}</span>
      </Link>
    );
  }
  return (
    <div className=" gap-x-2 py-3 ">
      <Button onClick={()=>toggleShow(!show)} className="flex py-3 px-3 justify-between w-full">
        <div className="text-sm flex gap-x-2">
          {icon}
          <span>{label}</span>
        </div>
        <ChevronDown />
      </Button>
      {show &&  <div className="flex flex-col">
        {subChildren?.map(({ label, link: childLink, name }, idx) => (
          <Link
            className=" gap-x-2 py-3 px-6 rounded-full  hover:bg-black/10 my-2  transition-all"
            key={`${name}--${idx}`}
            href={`${link}/${childLink}`}
          >
            <span>{label}</span>
          </Link>
        ))}
      </div>}
     
    </div>
  );
};

const SidebarMenu = (props: {
  dashboard: MenuLinksProps[];
  profile?: MenuLinksProps[];
  className?: ComponentProps<"aside">["className"];
}) => {
  return (
    <aside className={props.className}>
      <div className="p-10">
        <h2>Dashboard</h2>
        <div className="flex flex-col">
          {props.dashboard.map(({ label, link, name, children, icon }, idx) => {
            return (
              <SidebarMenuButton
                key={`${name}-${idx}`}
                isParent={children ? true : false}
                link={link}
                label={label}
                subChildren={children && children}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default SidebarMenu;
