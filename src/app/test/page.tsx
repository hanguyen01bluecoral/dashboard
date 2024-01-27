"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "../home/page";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

export default function NavigationMenuDemo1() {
  return (
    <Tabs defaultValue="account" className="">
      <div className="flex justify-between bg-white">
        <div>
          <svg
            className="ml-5 pt-[13px]" 
            width="35" height="46" viewBox="0 0 65 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4565_3426)">
            <path d="M61.1595 35.3889C60.0757 36.5947 58.8083 37.6213 57.4042 38.4306L56.1241 39.1697C57.0969 40.1416 57.8334 41.3246 58.2765 42.6273C58.7195 43.9299 58.8574 45.3172 58.6793 46.6818C58.5012 48.0463 58.0119 49.3515 57.2494 50.4964C56.4869 51.6412 55.4715 52.5949 54.282 53.2837L36.942 63.31C35.5892 64.1037 34.0507 64.5244 32.4828 64.5295C31.3049 64.5336 30.1378 64.3043 29.0488 63.8548C27.9597 63.4052 26.9702 62.7443 26.1373 61.9102C25.3044 61.076 24.6445 60.085 24.1956 58.9943C23.7468 57.9036 23.5178 56.7348 23.5219 55.5551V28.4697H17.2774V54.1337V55.5551C17.2713 58.2281 17.9694 60.8554 19.3013 63.1718C20.6331 65.4882 22.5516 67.4118 24.863 68.7483C27.1744 70.0848 29.797 70.787 32.466 70.784C35.1349 70.7809 37.7559 70.0728 40.0643 68.731L57.4042 58.7048C59.3579 57.573 61.0356 56.0202 62.3159 54.1587C63.5961 52.2972 64.4468 50.1738 64.8063 47.9423C65.1658 45.7109 65.0251 43.4273 64.3943 41.257C63.7636 39.0867 62.6586 37.0842 61.1595 35.3946V35.3889Z" fill="#212121"></path>
            <path d="M57.4045 12.0787L40.0645 2.05242C38.1148 0.918867 35.9372 0.235083 33.6903 0.0508662C31.4434 -0.13335 29.1837 0.186638 27.0759 0.987529C24.968 1.78842 23.0651 3.05005 21.5056 4.68054C19.9461 6.31103 18.7694 8.26933 18.061 10.4128C19.7238 10.7372 21.321 11.3367 22.787 12.1867L23.8429 12.7922C24.3788 10.9116 25.511 9.2567 27.0687 8.07724C28.6263 6.89779 30.5247 6.25782 32.4774 6.25395C34.0447 6.25729 35.5832 6.67609 36.9366 7.46778L54.2765 17.494C59.5447 20.5386 60.1549 27.6198 56.1187 31.6081C55.5671 32.158 54.9481 32.6356 54.2765 33.0294L50.1693 35.4031L30.9986 46.6204L34.0613 52.0784L56.1329 39.1697L57.413 38.4306C58.8171 37.6213 60.0845 36.5947 61.1682 35.3889C62.6674 33.6992 63.7723 31.6967 64.4031 29.5264C65.0339 27.3562 65.1746 25.0726 64.8151 22.8411C64.4556 20.6096 63.6049 18.4862 62.3247 16.6247C61.0444 14.7633 59.3666 13.2104 57.413 12.0787H57.4045Z" fill="#212121"></path>
            <path d="M23.8428 12.7923L22.7812 12.1782C21.3152 11.3282 19.718 10.7288 18.0552 10.4044C17.1146 10.2187 16.1585 10.1235 15.1998 10.1201C11.167 10.1261 7.30132 11.7346 4.45154 14.5924C1.60176 17.4502 0.000747486 21.3238 0 25.3627L0 45.4152C0.00450767 49.4526 1.60795 53.3234 4.45855 56.1783C7.30915 59.0332 11.1741 60.6391 15.2055 60.6436C16.1641 60.6402 17.1203 60.545 18.0609 60.3593C17.5421 58.807 17.2775 57.1808 17.2775 55.5438V54.1224C16.5997 54.2912 15.9039 54.3771 15.2055 54.3783C12.8306 54.379 10.5526 53.4353 8.87231 51.7546C7.19198 50.0738 6.2468 47.7936 6.24454 45.4152V25.3627C6.24417 24.1841 6.4757 23.0169 6.92589 21.9279C7.37609 20.8389 8.03613 19.8494 8.8683 19.016C9.70047 18.1826 10.6885 17.5215 11.7758 17.0707C12.8632 16.6198 14.0286 16.3879 15.2055 16.3883C15.9037 16.39 16.5993 16.4749 17.2775 16.6413C18.1147 16.8465 18.9185 17.17 19.6646 17.6021L23.5221 19.8337L43.0164 31.25L46.1245 25.8232L23.8428 12.7923Z" fill="#212121"></path>
            </g>
            <defs>
            <clipPath id="clip0_4565_3426">
            <rect width="65" height="70.7778" fill="white"></rect>
            </clipPath>
            </defs>
          </svg>
        </div>
        <TabsList className="mr-4">
          {/* <TabsTrigger value="account">Dashboed</TabsTrigger> */}
          <NavigationMenu className="w-full h-[56px]  bg-white">
            <NavigationMenuList>
              <NavigationMenuItem className="">
                <TabsTrigger value="a">
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </TabsTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <TabsTrigger value="b">
                  <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[370px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </TabsTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <TabsTrigger value="c">
                  <NavigationMenuTrigger>Emails</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[370px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </TabsTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <TabsTrigger value="d">
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Forms
                    </NavigationMenuLink>
                  </Link>
                </TabsTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <TabsTrigger value="e">
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Automations
                    </NavigationMenuLink>
                  </Link>
                </TabsTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <TabsTrigger value="f">
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Reports
                    </NavigationMenuLink>
                  </Link>
                </TabsTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <TabsTrigger value="g">
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Settings
                    </NavigationMenuLink>
                  </Link>
                </TabsTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <TabsTrigger value="g">
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className=" text-white h-[56px] bg-[#7757e6] p-4 font-bold">
                      Get Pro
                    </NavigationMenuLink>
                  </Link>
                </TabsTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </TabsList>
      </div>
      <TabsContent value="a">
        <div className=" ml-[0] w-[100%] mt-[20px] h-[500px] bg-white">
            home
        </div>
      </TabsContent>
      <TabsContent value="b">
        <div className="w-[100%] mt-[20px] h-[500px] bg-white">
            Đây là trang contact
        </div>
      </TabsContent>
      <TabsContent value="c">
        <div className="w-[100%] mt-[20px] h-[500px] bg-white">
            Đây là trang Email
        </div>
      </TabsContent>
      <TabsContent value="d">
        <div className="w-[100%] mt-[20px] h-[500px] bg-white">
            Đây là trang forms
        </div>
      </TabsContent>
      <TabsContent value="e">
        <div className="w-[100%] mt-[20px] h-[500px] bg-white">
            Đây là trang Automations
        </div>
      </TabsContent>
      <TabsContent value="f">
        <div className="w-[100%] mt-[20px] h-[500px] bg-white">
            Đây là trang report
        </div>
      </TabsContent>
      <TabsContent value="g">
        <div className="w-[100%] mt-[20px] h-[500px] bg-white">
            Đây là trang setting
        </div>
      </TabsContent>
    </Tabs>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-[12px] opacity-50 leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";