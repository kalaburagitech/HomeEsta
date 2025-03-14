"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  MessageSquare,
  Calendar,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  CreditCard,
  Home,
  BarChart3,
  PieChart,
  Layers,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Properties", href: "/properties", icon: Home },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Clients", href: "/dashboard/clients", icon: Users },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: MessageSquare,
      badge: "5",
    },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Reports", href: "/dashboard/reports", icon: PieChart },
  ];

  const secondaryNavigation = [
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Help Center", href: "/dashboard/help", icon: HelpCircle },
  ];

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex w-72 flex-col bg-gradient-to-b from-green-900 to-teal-900 transition-all duration-300 lg:relative",
          isSidebarOpen ? "left-0" : "-left-72 lg:left-0 lg:w-20"
        )}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-4 py-5">
          <Link href="/dashboard" className="flex items-center gap-2">
            {isSidebarOpen || !isMobile ? (
              <>
                <Layers className="h-8 w-8 text-green-400" />
                <span
                  className={cn(
                    "text-xl font-bold transition-all",
                    !isSidebarOpen && !isMobile && "hidden"
                  )}
                >
                  HomeEsta
                </span>
              </>
            ) : null}
          </Link>
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              <X className="h-6 w-6" />
            </Button>
          )}
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-auto py-4">
          <nav className="flex flex-col gap-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-white/10",
                  pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-gray-300"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 shrink-0",
                    pathname === item.href ? "text-green-400" : ""
                  )}
                />
                <span
                  className={cn(
                    "transition-all",
                    !isSidebarOpen && !isMobile && "hidden"
                  )}
                >
                  {item.name}
                </span>
                {item.badge && isSidebarOpen && (
                  <Badge className="ml-auto bg-green-500 hover:bg-green-600">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}

            <div className="my-3 h-px bg-white/10" />

            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-white/10",
                  pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-gray-300"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 shrink-0",
                    pathname === item.href ? "text-green-400" : ""
                  )}
                />
                <span
                  className={cn(
                    "transition-all",
                    !isSidebarOpen && !isMobile && "hidden"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar footer with user profile */}
        <div
          className={cn(
            "border-t border-white/10 p-4",
            !isSidebarOpen && !isMobile && "flex justify-center"
          )}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full items-center gap-3 px-2 hover:bg-white/10"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-green-700">JD</AvatarFallback>
                </Avatar>
                {isSidebarOpen && (
                  <div className="flex flex-1 flex-col items-start text-left">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-gray-400">
                      john@example.com
                    </span>
                  </div>
                )}
                {isSidebarOpen && (
                  <ChevronDown className="h-4 w-4 opacity-50" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="flex h-16 items-center justify-between border-b border-white/10 bg-gray-900 px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 bg-gray-800 pl-8 text-sm placeholder:text-gray-500 focus-visible:ring-green-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-green-500"></span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-green-700">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto bg-gray-900 p-4 lg:p-6">
          {children || <DashboardContent />}
        </main>
      </div>
    </div>
  );
}

// Default dashboard content if no children are provided
function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
            <Building2 className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>
      </div>

      {/* Stats overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Total Properties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="mt-1 text-xs text-green-400">↑ 12% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Active Listings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="mt-1 text-xs text-green-400">↑ 8% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,294</div>
            <p className="mt-1 text-xs text-green-400">↑ 24% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              New Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="mt-1 text-xs text-red-400">↓ 3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent activity and performance */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent properties */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Recent Properties</CardTitle>
            <CardDescription className="text-gray-400">
              Your most recently added properties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  name: "Modern Apartment",
                  address: "123 Main St, New York",
                  price: "$2,500,000",
                  status: "Active",
                },
                {
                  id: 2,
                  name: "Luxury Villa",
                  address: "456 Ocean Ave, Miami",
                  price: "$4,800,000",
                  status: "Pending",
                },
                {
                  id: 3,
                  name: "Downtown Condo",
                  address: "789 Market St, San Francisco",
                  price: "$1,200,000",
                  status: "Active",
                },
                {
                  id: 4,
                  name: "Suburban House",
                  address: "101 Oak Dr, Austin",
                  price: "$850,000",
                  status: "Sold",
                },
              ].map((property) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-gradient-to-br from-green-500 to-teal-500 p-2">
                      <Home className="h-full w-full text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{property.name}</p>
                      <p className="text-xs text-gray-400">
                        {property.address}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{property.price}</p>
                    <Badge
                      className={cn(
                        "mt-1",
                        property.status === "Active"
                          ? "bg-green-500 hover:bg-green-600"
                          : property.status === "Pending"
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-blue-500 hover:bg-blue-600"
                      )}
                    >
                      {property.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance metrics */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription className="text-gray-400">
              Your sales and engagement metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm">Listing Views</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <Progress
                value={78}
                className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-teal-500"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm">Inquiries</span>
                <span className="text-sm font-medium">63%</span>
              </div>
              <Progress
                value={63}
                className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-teal-500"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm">Conversion Rate</span>
                <span className="text-sm font-medium">42%</span>
              </div>
              <Progress
                value={42}
                className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-teal-500"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm">Client Satisfaction</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <Progress
                value={92}
                className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-teal-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming appointments */}
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription className="text-gray-400">
            Your schedule for the next few days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Property Viewing",
                client: "Emma Thompson",
                property: "Modern Apartment",
                date: "Today, 2:00 PM",
              },
              {
                id: 2,
                title: "Contract Signing",
                client: "Michael Chen",
                property: "Luxury Villa",
                date: "Tomorrow, 10:30 AM",
              },
              {
                id: 3,
                title: "Client Consultation",
                client: "Sarah Johnson",
                property: "N/A",
                date: "Mar 16, 4:00 PM",
              },
            ].map((appointment) => (
              <Card key={appointment.id} className="bg-gray-700/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    {appointment.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {appointment.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{appointment.client}</span>
                    </div>
                    {appointment.property !== "N/A" && (
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{appointment.property}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
