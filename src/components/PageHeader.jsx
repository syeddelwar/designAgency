"use client";
import { usePathname } from "next/navigation";
import React from 'react'
import PageLayout from './PageLayout'
import Breadcrumbs from './Breadcrumbs'

function PageHeader() {
  const pathname = usePathname();
  const routeArray = pathname.split("/").filter((segment) => segment !== "");
  return (
   
        <div className="pt-28 pb-12 bg-grayShade">
             <PageLayout>
              <div>
                <div className="text-2xl font-semibold capitalize">{routeArray[0]}  </div>
                <Breadcrumbs/>
              </div>
             </PageLayout>
        </div>
    
  )
}

export default PageHeader