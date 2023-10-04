"use client"
import useWindowDimensions from "@/hook/getWindowDimensions";
import menuList from "@/utils/menuList";
import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function MobileDrawer({ setSidebar, isOpen }) {
  const { width } = useWindowDimensions();

  const closeSidebar = () => {
    setSidebar(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar(open);
  };

  return (
    <>
      {width !== undefined && width < 768 && (
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 260 }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="h-full dark:text-white bg-white dark:bg-[#1f2937]"
          >
            <div className="text-2xl pb-4 pt-5 bg-white flex items-center px-4 justify-between font-medium border dark:border-gray-900">
              <div>Menu</div>
              <div onClick={closeSidebar} className="text-[1.7rem]">
                <i aria-hidden className="bx bx-x"></i>
              </div>
            </div>

            <div className="overflow-x-auto h-[calc(100%-4.5rem)]">
              {menuList.map((menu, idx) => (
                <Link
                  href={menu.link}
                  key={idx}
                  className="capitalize font-medium text-gray-800 hover:text-mainColor  dark:text-white"
                  onClick={closeSidebar}
                >
                  <ul className="w-full py-2 px-2 my-1">
                    <li
                      className={`py-1 px-4 block w-full capitalize rounded-lg overflow-hidden`}
                    >
                      {menu.name}
                    </li>
                  </ul>
                </Link>
              ))}

              <div className="mx-3 flex flex-col gap-4">
                <Link href="/">
                  <div className="border border-[#20B15A] px-5 py-2 rounded-lg hover:bg-[#20B15A] hover:text-white transition ease-in-out delay-150 cursor-pointer">
                    Login
                  </div>
                </Link>
                <Link href="/">
                  <div className="bg-[#20B15A] text-white px-5 py-2 rounded-lg cursor-pointer">
                    Register
                  </div>
                </Link>
              </div>
            </div>
          </Box>
        </Drawer>
      )}
    </>
  );
}
