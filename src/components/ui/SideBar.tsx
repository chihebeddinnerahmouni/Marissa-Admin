import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import classes_array from "../../assets/files/classes_array";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const isMobile = useMediaQuery("(max-width: 600px)");
    const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleListItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const DrawerList = (
    <Box
      className={"w-[60px] md:w-[200px]"}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <h1 className="text-center text-2xl font-bold mt-4 hidden lg:block">Admin</h1>
      <List className="space-y-1">
        {classes_array.map((text, index) => (
          <ListItem
                key={index}
                onClick={() => navigate(`/${text.title}`)}
            disablePadding
            className={`
            ${
              activeIndex === index
                ? "border-l-4 border-main bg-main bg-opacity-10"
                : "hover:bg-gray-100"
            }`}
          >
            <ListItemButton onClick={() => handleListItemClick(index)}>
              <ListItemIcon>
                <text.icon
                  className={`${activeIndex === index ? "text-main" : ""}`}
                />
              </ListItemIcon>
              {!isMobile && (
                <ListItemText
                  primary={text.title}
                  className={`${activeIndex === index ? "text-main" : ""}`}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        open={open}
        slotProps={{
          backdrop: {
            style: {
              backdropFilter: "blur(7px)",
              backgroundColor: "transparent",
            },
          },
        }}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
