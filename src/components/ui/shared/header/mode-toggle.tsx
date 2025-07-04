'use client';
import { useState,useEffect } from "react";
import {
     DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem  
} from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import { SunIcon,MoonIcon,SunMoon} from 'lucide-react'
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
    const [mounted,setMounted] =useState(false);
    const{ theme,setTheme} =useTheme();

    useEffect (() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return null;
    }
    return(<DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                { theme === 'system' ?(
                    <SunMoon />

                ) : theme === 'dark' ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}

            </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem 
            checked={theme === 'Dark'} 
            onClick={ () => setTheme('Dark')}
            >
             Dark
             
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
            checked={theme === 'Light'} 
            onClick={ () => setTheme('Light')}
            >
             Light
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
    );
    
};
export default ModeToggle;