"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";
import { TbZoomMoney } from "react-icons/tb";

const Header = () => {
  return (
    <header>
      <Card>
        <CardContent className="p-5 justify-between items-center flex flex-row">
          <Link href="/">
              <TbZoomMoney size={40} />

          </Link>
          <Link className="flex flex-column font-bold" href="/">
              GESTÃO BET
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <IoMenu size={16} />
              </Button>
            </SheetTrigger>

            <SheetContent className="p-0 w-[250px] sm:w-[320px]">
              <SideMenu />
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;