import { BadgeCheck, HelpCircle, LogOut, Settings, ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '@/store/auth.store';
import { useLogout } from '@/hooks/useAuth';

const UserNav = () => {
  const { user } = useAuthStore();
  const { mutate: logout, isPending } = useLogout();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name: string): string => {
    return name.split(' ').map((n) => n.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  const closeDropdown = () => setIsDropdownOpen(false);

  const handleLogout = () => {
    closeDropdown();
    logout();
  };

  // fallback if user not loaded yet
  const displayName = user?.name ?? 'User';
  const displayEmail = user?.email ?? '';

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center justify-center gap-2 cursor-pointer hover:bg-muted/40 px-3 py-2 rounded-lg transition-colors"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {/* Avatar */}
        <div className="gradient size-10 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {getInitials(displayName)}
        </div>

        {/* Name + Email */}
        <div className="hidden lg:flex flex-col leading-tight">
          <span className="font-medium text-sm">{displayName}</span>
          <span className="text-xs text-muted-foreground">{displayEmail}</span>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex">
          <ChevronsUpDown className="size-4" />
        </div>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-background rounded-lg shadow-lg border border-border py-2 z-50">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium">{displayName}</p>
            <p className="text-xs text-muted-foreground truncate">{displayEmail}</p>
          </div>

          <div>
            <Link
              href="/profile"
              onClick={closeDropdown}
              className="w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors flex items-center gap-3 border-b border-border"
            >
              <BadgeCheck className="size-4" /> Profile
            </Link>
            <Link
              href="/settings"
              onClick={closeDropdown}
              className="w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors flex items-center gap-3 border-b border-border"
            >
              <Settings className="size-4" /> Settings
            </Link>
            <Link
              href="/help"
              onClick={closeDropdown}
              className="w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors flex items-center gap-3"
            >
              <HelpCircle className="size-4" /> Help
            </Link>
          </div>

          <div className="border-t border-border">
            <button
              onClick={handleLogout}
              disabled={isPending}
              className="w-full text-left px-4 py-2 text-sm text-danger hover:bg-accent transition-colors flex items-center gap-3 disabled:opacity-60"
            >
              <LogOut className="size-4 text-danger" />
              {isPending ? 'Signing out...' : 'Sign out'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNav;