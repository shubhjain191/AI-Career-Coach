import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { Button } from './ui/button'
import { StarsIcon, ChevronDownIcon, LayoutDashboard, FileText, PenBox, GraduationCap } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
    await checkUser();
    return (
        <header className='fixed top-0 w-full border-b bg-background backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        width={720}
                        height={500}
                        className='h-20 w-auto object-contain'
                    />
                </Link>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button>
                                <LayoutDashboard className='h-4 w-4' />
                                <span>Industry Insights</span>
                            </Button>
                        </Link>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className='flex items-center space-x-2 cursor-pointer'>
                                <StarsIcon className='h-4 w-4' />
                                <span>Growth Tools</span>
                                <ChevronDownIcon className='h-4 w-4' />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className='flex items-center gap-2'>
                                    <FileText className='h-4 w-4' />
                                    <span>Build Resume</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/cover-letter"} className='flex items-center gap-2'>
                                    <PenBox className='h-4 w-4' />
                                    <span>Cover Letter</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/interview-prep"} className='flex items-center gap-2'>
                                    <GraduationCap className='h-4 w-4' />
                                    <span>Interview Prep</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton 
                        appearance={{
                            elements: {
                                avatarBox: 'h-9 w-9',
                                userButtonPopoverCard: 'shadow-xl',
                                userPreviewMainIdentifier: 'font-semibold'
                            }
                        }}
                        afterSignOutUrl="/"
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header