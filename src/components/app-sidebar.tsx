"use client"

import * as React from "react"
import {
    IconCamera,
    IconChartBar,
    IconDashboard,
    IconFileAi,
    IconFileDescription,
    IconHelp,
    IconPlane,
    IconSettings,
    IconTargetArrow,
    IconUsers,
} from "@tabler/icons-react"

import {NavMain} from "@/components/nav-main"
import {NavSecondary} from "@/components/nav-secondary"
import {NavUser} from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import {Plane} from "lucide-react";
import DarkModeToggle from "@/components/global/DarkModeToggle";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: IconDashboard,
        },
        {
            title: "Wyjazdy",
            url: "/dashboard/trips",
            icon: IconPlane,
        },
        {
            title: "Statystki",
            url: "/dashboard/analytics",
            icon: IconChartBar,
        },
        {
            title: "Cele",
            url: "/dashboard/goals",
            icon: IconTargetArrow,
        },
        {
            title: "Przyjaciele",
            url: "/dashboard/friends",
            icon: IconUsers,
        },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Ustawienia",
            url: "/dashboard/settings",
            icon: IconSettings,
        },
        {
            title: "Pomoc",
            url: "/dashboard/help",
            icon: IconHelp,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className='p-2'>
                            <div className='flex items-center justify-between'>
                                <Link className='flex items-center gap-2' href="/dashboard">
                                    <Plane className="!size-5"/>
                                    <span className="text-base font-semibold">GoTogether</span>
                                </Link>
                                <DarkModeToggle/>
                            </div>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                <NavSecondary items={data.navSecondary} className="mt-auto"/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
        </Sidebar>
    )
}
