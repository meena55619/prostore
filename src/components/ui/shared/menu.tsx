import Link from "next/link";
import { Button } from "../button";
import ModeToggle from "./header/mode-toggle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1 items-center">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart" className="flex items-center gap-1">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in" className="flex items-center gap-1">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-start'>
                    <SheetTitle>Menu</SheetTitle>
                    <ModeToggle />
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                            <ShoppingCart /> Cart
                        </Link>
                    </Button>
                    <Button asChild>
          <Link href="/sign-in" className="flex items-center gap-1">
            <UserIcon /> Sign In
          </Link>
        </Button>
                    <SheetDescription></SheetDescription>
                </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
