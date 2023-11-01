import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import BackupTableIcon from "@mui/icons-material/BackupTable";

const Item = ({ to, title, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[200] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};
const SidebarMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div style={{ height: "100vh" }}>
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[800]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .ps-menu-button:hover": {
            backgroundColor: "rgba(17, 205, 239, 0.1) !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
          "& .css-1wvake5": {
            border: "0",
          },
        }}
      >
        <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[600]}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="10px"
                >
                  {/* <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/avatar.jpg`}
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                  /> */}
                  <Typography variant="h5" color={colors.grey[100]}>
                    My Admin Panel
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                ></Box>
                {/* <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Samira Miss
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin panel
                </Typography>
              </Box> */}
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<DashboardIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Table"
                to="/table"
                icon={<BackupTableIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Employees"
                to="/doctor"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Profile Form"
                to="/form"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Profile"
                to="/"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  );
};

export default SidebarMenu;
