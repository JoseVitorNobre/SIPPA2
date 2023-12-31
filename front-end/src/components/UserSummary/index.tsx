'use client';

import { Poppins } from 'next/font/google';

import { Avatar } from '@/components/Avatar';
import { Skeleton } from '@/components/Skeleton';
import { useAuth } from '@/hooks/useAuth';

const poppins = Poppins({ weight: '600', subsets: ['latin'] });

export function UserSummary() {
   const { userLogged } = useAuth();

   return (
      <div className="bg-white flex flex-col md:w-auto lg:min-w-[500px] h-[160px] rounded-md overflow-hidden shadow-sm">
         <div className="bg-green-300 h-7"></div>
         <div className="flex items-center flex-1 px-8">
            <div className="flex items-center gap-4">
               <Avatar
                  avatarImageUrl={userLogged.url ?? 'https://'}
                  name={userLogged.name}
                  width="90"
                  textSizeFalback="text-lg"
                  isBorder
               />
               {userLogged.student_id ? (
                  <div>
                     <span
                        className={`${poppins.className} text-green-600 block -mb-1 text-sm`}
                     >
                        {userLogged.course}
                     </span>
                     <h1
                        className={`${poppins.className} text-lg text-gray-700`}
                     >
                        Olá, {userLogged.name}
                     </h1>
                     <span className="text-gray-500 text-[15px]">
                        Ficamos feliz em tê-lo de volta.
                     </span>
                  </div>
               ) : (
                  <div className="space-y-1">
                     <Skeleton className="h-2 w-32" />
                     <Skeleton className="h-3 w-48" />
                     <Skeleton className="h-3 w-56" />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
