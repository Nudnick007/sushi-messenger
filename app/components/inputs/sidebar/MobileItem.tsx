"use client";

import React from "react"
import Link from "next/link";
import clsx from "clsx";
interface MobileItemProps{
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
    href,
    icon: Icon,
    onClick,
    active
}) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    }

  return (
    <div>
      <Link
      onClick={onClick}
      href ={href}
      className={clsx(`
      group
      flex
      gap-x-3
      text-sm
      leading-6
      font-semibold
      w-full
      justify-center
      p-4
      text-rw2
      hover:text-rw3
      hover:bg-gray-100
      `,
      active && 'bg-gray-100 text-rw3'
      )}
      >
        <Icon className = "h-6 w-6" />
      </Link>
    </div>
  );
};

export default MobileItem;
