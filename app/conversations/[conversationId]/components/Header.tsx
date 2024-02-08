"use client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import React, { useMemo, useState } from "react"
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/app/components/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";

interface HeaderProps{
    conversation: Conversation & {
        users: User[]
    }
};

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {members} = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) != -1;

    const statusText = useMemo(()=> {
        if(conversation.isGroup) {
            return `${conversation.users.length} members`;
        }

        return isActive ? 'Active' : 'Offline';
    },[conversation, isActive]);
  return (
    <>
    <ProfileDrawer
    data={conversation}
    isOpen={drawerOpen}
    onClose = {()=> setDrawerOpen(false)}
    />
    <div
    className="
    bg-verylight
    w-full
    flex
    border-b-[1px]
    sm:px-4
    py-3
    px-4
    lg:px-6
    justify-between
    items-center
    shadow-sm
    "
    >
      <div className="flex gap-3 items-center">
        <Link href='/conversations'
        className="
        lg:hidden
        block
        text-rw3
        hover:text-rw4
        transition
        cursor-pointer
        "
        >
            <HiChevronLeft size={32}/>
        </Link>
        {conversation.isGroup?(
          <AvatarGroup users={conversation.users}/>
        ): (
          <Avatar user={otherUser}/>
        )}
        
        <div className="flex flex-col">
          <div>
            {conversation.name || otherUser.name}
          </div>
          <div
          className="
          text-sm
          font-light
          text-neutral"
          >
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
      size={32}
      onClick={()=> setDrawerOpen(true)}
      className="
      text-rw3
      cursor-pointer
      hover:text-rw4
      transition"
      />
    </div>
    </>
  )
};

export default Header;
