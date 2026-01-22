import { List, ListItemButton, ListItemText } from "@mui/material";

const menu = [
  { key: "infra", label: "INFRASTRUCTURE & MACHINERY", title: "Infrastructure & Machinery", breadcrumb: "Infrastructure" },
  { key: "portfolio", label: "PRODUCT & PORTFOLIO", title: "Product & Portfolio", breadcrumb: "Portfolio" },
  { key: "tech", label: "TECHNICAL SPECIFICATION", title: "Technical Specifications", breadcrumb: "Technical SPECIFICATION" },
  { key: "quality", label: "QUALITY & SAFETY", title: "Quality & Safety", breadcrumb: "Quality" },
];

const LeftSidebar = ({ activeTab, setActiveTab, onTabChange }) => {
  const handleTabClick = (key) => {
    setActiveTab(key);
    if (onTabChange) {
      const selected = menu.find(item => item.key === key);
      onTabChange(selected.title, selected.breadcrumb);
    }
  };

  return (
    <List sx={{ border: "1px solid #ddd" }}>
      {menu.map((item) => (
        <ListItemButton
          key={item.key}
          onClick={() => handleTabClick(item.key)}
          sx={{
            borderBottom: "1px solid #eee",
            backgroundColor: activeTab === item.key ? "green" : "transparent",
            color: activeTab === item.key ? "#fff" : "#000",
            "&:hover": {
              backgroundColor: activeTab === item.key ? "green" : "#f5f5f5",
            },
            fontFamily: "Open Sans",
          }}
        >
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Open Sans",
            }}
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default LeftSidebar;