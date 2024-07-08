import React from "react";
import { Drawer } from "antd";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { closeDrawer } from "../../shared/store/drawerSlice";
import styles from "./Drawer.module.scss";
const App: React.FC = () => {
  const open = useAppSelector((state) => state.drawer.open);
  const dispatch = useAppDispatch();
  return (
    <>
      <Drawer
        width={"50vw"}
        title="Cart"
        onClose={() => dispatch(closeDrawer())}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
