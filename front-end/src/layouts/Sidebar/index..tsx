'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';

import { useSidebar } from '@/hooks/useSidebar';

import '@/styles/utils.css';
import './style.css';

interface SidebarItemProps {
   name: string;
   icon: React.ReactNode;
   pathName: string | undefined;
}

const Sidebar = () => {
   const { main, subject_details } = useSidebar();
   const path = usePathname();
   const { subject } = useParams();

   return (
      <div className="bg-white h-14 shadow flex items-center">
         <div className="container-content">
            <div className="flex w-full gap-8">
               {path.includes('/disciplinas/') && path.split('disciplinas/')[1]
                  ? subject_details.map((menu) => (
                       <SidebarItem
                          key={menu.name}
                          name={menu.name}
                          pathName={menu.redirect(subject)}
                          icon={menu.icone}
                       />
                    ))
                  : main.map((menu) => (
                       <SidebarItem
                          key={menu.name}
                          name={menu.name}
                          pathName={menu.pathName}
                          icon={menu.icone}
                       />
                    ))}
            </div>
         </div>
      </div>
   );
};

const SidebarItem = ({ name, pathName = '', icon }: SidebarItemProps) => {
   const path = usePathname();

   return (
      <nav className="">
         <Link
            href={pathName}
            className={`group flex items-center gap-1 ${
               path == pathName ? 'text-green-600' : 'text-gray-500'
            }`}
            prefetch={false}
         >
            <span className="item">{icon}</span>
            <span className={`item text-[13px]`}>{name}</span>
         </Link>
      </nav>
   );
};

export default Sidebar;
