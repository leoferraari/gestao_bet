"use client";

import { signOut, useSession } from "next-auth/react";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { MdLogout } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiCoinInsert } from "react-icons/ci";
import { BiSolidReport } from "react-icons/bi";
import { ButtonIcon } from "./button-icon";

import { useRouter } from 'next/navigation';
import { ButtonIconMenu } from "./ButtonIconMenu";

const SideMenu = () => {
  const { data } = useSession();
  const router = useRouter();

  const handleLogoutClick = () => signOut();

  const handleRouterMyHouses = () => {
    router.push('/minhas_casas');
  };  
  
  const handleRouterOperations = () => {
    router.push('/operacoes');
  };
  
  const handleRouterMyBets = () => {
    router.push('/apostas');
  };

  const handleRouterReports = () => {
    router.push('/relatorios');
  };

  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>


        <div className="flex justify-between px-5 py-6 items-center">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data ? (data.user?.image ?? "") : "/gestao_bet.png"} />
            </Avatar>

            <h2 className="font-bold">{ data ? (data.user?.name) : "Olá, Leonardo!"}</h2>
          </div>

          <Button>
            <MdLogout onClick={handleLogoutClick} />
          </Button>
        </div>

        <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary flex justify-between">
          <h1 className="font-bold flex items-center pt-2">Banca Atual:</h1>
          <div className="flex items-center gap-1 mt-2">
            <MdAttachMoney size={30} />
            <p className="text-sm">1.200,00</p>
          </div>
        </div>

        <hr/>

        {/* Pattern de Composição -   */}
        <div className="mt-10 flex flex-wrap items-center max-sm:flex-col ">
          <ButtonIconMenu.Root onClick={handleRouterMyHouses} className="ml-5">
            <ButtonIconMenu.Icon icon={FaHouse} />
            <ButtonIconMenu.Content text="Minhas Casas" />
          </ButtonIconMenu.Root>

          <ButtonIconMenu.Root onClick={handleRouterOperations} className="ml-4">
            <ButtonIconMenu.Icon icon={BiMoneyWithdraw} />
            <ButtonIconMenu.Content text="Operações" />
          </ButtonIconMenu.Root>

          <ButtonIconMenu.Root onClick={handleRouterMyBets} className="ml-5">
            <ButtonIconMenu.Icon icon={CiCoinInsert} />
            <ButtonIconMenu.Content text="Minhas Apostas" />
          </ButtonIconMenu.Root>

          <ButtonIconMenu.Root onClick={handleRouterReports} className="ml-4">
            <ButtonIconMenu.Icon icon={BiSolidReport} />
            <ButtonIconMenu.Content text="Relatórios" />
          </ButtonIconMenu.Root>
        </div>

        {/* <div className="mt-10 flex flex-wrap items-center max-sm:flex-col">
            <ButtonIcon onClick={handleRouterMyHouses} text="Minhas Casas" icon={FaHouse} />
            <ButtonIcon onClick={handleRouterOperations} text="Operações" icon={BiMoneyWithdraw} />
            <ButtonIcon onClick={handleRouterMyBets} text="Minhas Apostas" icon={CiCoinInsert} />
            <ButtonIcon onClick={handleRouterReports} text="Relatórios" icon={BiSolidReport}/>
        </div> */}
    </>
  );
};

export default SideMenu;