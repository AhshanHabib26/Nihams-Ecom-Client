import React from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  Layers3,
  LibraryBig,
  Menu,
  Package,
  Palette,
  PartyPopper,
  Percent,
  ShoppingCart,
  UserRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../assets/icons/nihams-logo.png";
import Image from "next/image";
import useUserInfo from "@/hooks/useUserInfo";
import { getGreeting } from "@/utils/adminGreetings";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";
const DashboardNavbar = ({ children }: { children: React.ReactNode }) => {
  const userInfo = useUserInfo();
  const role = userInfo?.role;
  const userName = userInfo?.userName;
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
    router.push("/");
  };

  return (
    <div>
      <div className="grid w-full h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/">
                <Image src={logo} width={140} height={100} alt="Nihams Mart" />
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href="/dashboard/admin"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/admin/orders"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="/dashboard/admin/products"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                >
                  <Package className="h-4 w-4" />
                  Prodcuts{" "}
                </Link>
                <Link
                  href="/dashboard/admin/coupon"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Percent className="h-4 w-4" />
                  Coupon
                </Link>
                <Link
                  href="/dashboard/admin/categories"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Layers3 className="h-4 w-4" />
                  Category
                </Link>
                <Link
                  href="/dashboard/admin/colors"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Palette className="h-4 w-4" />
                  Colors
                </Link>
                <Link
                  href="/dashboard/admin/brands"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LibraryBig className="h-4 w-4" />
                  Brands
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-md font-medium">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={150}
                      height={100}
                      alt="Nihams Mart"
                    />
                  </Link>

                  <Link
                    href="/dashboard/admin"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-1 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/admin/orders"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl bg-muted px-3 py-1 text-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="/dashboard/admin/products"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-1 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>
                  <Link
                    href="/dashboard/admin/coupon"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-1 text-muted-foreground hover:text-foreground"
                  >
                    <Percent className="h-5 w-5" />
                    Coupon
                  </Link>
                  <Link
                    href="/dashboard/admin/categories"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-1 text-muted-foreground hover:text-foreground"
                  >
                    <Layers3 className="h-5 w-5" />
                    Category
                  </Link>
                  <Link
                    href="/dashboard/admin/colors"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-1 text-muted-foreground hover:text-foreground"
                  >
                    <Palette className="h-5 w-5" />
                    Colors
                  </Link>
                  <Link
                    href="/dashboard/admin/brands"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-1 text-muted-foreground hover:text-foreground"
                  >
                    <LibraryBig className="h-5 w-5" />
                    Brands
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <div>
                <div className="flex items-center gap-1">
                  <PartyPopper className="text-gray-600" size={18} />
                  <h1 className="text-md">
                    {`${getGreeting()}, `}
                    <span className=" text-orange-600 font-semibold">
                      {userName}
                    </span>
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <UserRound className="text-gray-600" size={18} />
                  <span className=" capitalize text-sm text-gray-600">
                    {role}
                  </span>
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className=" cursor-pointer" onClick={handleLogOut}>
                    Logout
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
