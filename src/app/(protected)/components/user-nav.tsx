import { BadgeCheck, HelpCircle, LogOut, Settings, User, ChevronsUpDown, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '@/store/auth.store';
import { useLogout } from '@/hooks/useAuth';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string; // optional avatar URL
}

const UserNav = () => {
  // Sample user data - replace with your actual user data
  const user: User = {
    firstName: 'Awais',
    lastName: 'Faryad',
    email: 'awaisfaryad25@gmail.com',
    // avatar: 'https://example.com/avatar.jpg' // uncomment if you have an avatar URL
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get initials from first and last name
  const getInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown function to be called when navigating
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    // Your logout logic here
    closeDropdown();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center justify-center gap-2 cursor-pointer hover:bg-muted/40 px-3 py-2 rounded-lg transition-colors" onClick={toggleDropdown}>
        {/* Left - Profile Picture or Initials */}
        <div className="gradient size-10 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt={`${user.firstName} ${user.lastName}`} 
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            getInitials(user.firstName, user.lastName)
          )}
        </div>

        {/* Center - User Full Name and Email */}
        <div className="hidden lg:flex flex-col leading-tight">
          <span className="font-medium text-sm ">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-xs ">
            {user.email}
          </span>
        </div>

        {/* Right - Dropdown Arrow */}
        <div className="hidden md:flex">
          <ChevronsUpDown className='size-4' />
        </div>
      </div>

      {/* Dropdown Popup */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-background rounded-lg shadow-lg border border-border py-2 z-100">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium ">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs truncate">
              {user.email}
            </p>
          </div>
          
          <div className="">
            <Link href="/profile" onClick={closeDropdown} className="w-full text-left px-4 py-2 text-sm  hover:bg-accent transition-colors flex items-center gap-3 border-b border-border cursor-pointer">
              <BadgeCheck className="size-4" />
              Profile
            </Link>
            <Link href="/settings" onClick={closeDropdown} className="w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors flex items-center gap-3 border-b border-border cursor-pointer">
              <Settings className="size-4" />
              Settings
            </Link>
            <Link href="/help" onClick={closeDropdown} className="w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors flex items-center gap-3 cursor-pointer">
              <HelpCircle className="size-4" />
              Help
            </Link>
          </div>
          
          <div className="border-t border-border ">
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-danger hover:bg-accent transition-colors flex items-center gap-3 cursor-pointer">
              <LogOut className="size-4 text-danger" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserNav