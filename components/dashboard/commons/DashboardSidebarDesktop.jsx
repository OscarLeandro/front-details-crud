import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

import { useGlobalInfo } from "../../../context/GlobalContext";
import { auth } from "../../../lib/firebase";
import { classNames } from "../../../lib/Helper";

export default function DashboardSidebarDesktop({
  navigation,
  secondaryNavigation,
  user,
}) {
  const { currentUserEmail, setCurrentUserEmail } = useGlobalInfo();

  

  const router = useRouter()
  console.log(auth)

  const signState = onAuthStateChanged(auth, (user) => {
    if (user) {
      //console.log(user);
      setCurrentUserEmail(user.email);
    }else{
      router.push('signIn')
    }
  });

  function signOutUser(){
    signOut(auth)
    router.push('/signIn')

  }

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-64 flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                alt="Your Company"
              />
            </div>
            <nav className="mt-5 flex-1" aria-label="Sidebar">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <hr
                className="my-5 border-t border-gray-200"
                aria-hidden="true"
              />
              <div className="flex-1 space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <item.icon
                      className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            {currentUserEmail ? (
              <div className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {currentUserEmail}
                    </p>
                    <a className="text-xs font-medium text-gray-500 hover:text-gray-700">
                      View profile
                    </a>
                    <a   className="text-xs font-medium text-gray-500  ">
                    <ArrowLeftOnRectangleIcon  onClick={signOutUser}  className="hover:text-gray-900 cursor-pointer w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Iniciar Sesion
                    </p>
                    <ArrowRightOnRectangleIcon className="w-6 h-6" />
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
