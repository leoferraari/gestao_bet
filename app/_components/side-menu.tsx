"use client";

import { signOut, useSession } from "next-auth/react";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { MdLogout } from "react-icons/md";

const SideMenu = () => {
  const { data } = useSession();

  const handleLogoutClick = () => signOut();

  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>


        <div className="flex justify-between px-5 py-6 items-center">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data ? (data.user?.image ?? "") : ""} />
            </Avatar>

            <h2 className="font-bold">{ data ? (data.user?.name) : ""}</h2>
          </div>

          <Button>
            <MdLogout onClick={handleLogoutClick} />
          </Button>
        </div>
      
    </>
  );
};

export default SideMenu;