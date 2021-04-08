import React, { ReactNode } from "react";
import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";
import Cookies from "js-cookie";
import {
  PlusOutlined,
  PieChartOutlined,
  DatabaseOutlined,
  BarsOutlined,
  UserOutlined,
  DesktopOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useToken } from "../../lib/Context";
import jwt from "jsonwebtoken";
import { SelectedPanelField } from "@UTILS/selectedPanel";
const { Content, Footer } = Layout;
const { SubMenu } = Menu;

type IProps = {
  children?: ReactNode;
  selectedField: number | string;
  flexCenter?: boolean;
};

const LayoutM = ({ children, selectedField, flexCenter }: IProps) => {
  const router = useRouter();
  const routePathSplit = router.asPath.split("/").slice(1);
  // console.log(router);

  // const cookieName = Cookies.get("token");
  const [tokenState] = useToken();
  const decodedToken = jwt.decode(tokenState.token);
  // @ts-ignore
  const { username } = decodedToken;
  // console.log(decodedToken);
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <StyledMenu
          selectedKeys={[`${selectedField}`]}
          theme="dark"
          // defaultSelectedKeys={[`${selectedField}`]}
          defaultSelectedKeys={["1"]}
          mode="horizontal">
          <Menu.Item>
            <h1 style={{ color: "white", marginRight: "10vw" }}>SavFlota</h1>
          </Menu.Item>

          <Menu.Item key={SelectedPanelField.PANEL} icon={<DesktopOutlined />}>
            <Link href="/panel">
              <a>Panel</a>
            </Link>
          </Menu.Item>
          <SubMenu
            key={SelectedPanelField.DODAJ}
            icon={<PlusOutlined />}
            title="Dodaj">
            <Menu.Item key={SelectedPanelField.DODAJ_AUTO}>
              <Link href="/dodaj/auto">
                <a>Auto</a>
              </Link>
            </Menu.Item>

            <Menu.Item key={SelectedPanelField.DODAJ_UZYTKOWNIK}>
              <Link href="/dodaj/uzytkownik">
                <a>Uzytkownik</a>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key={SelectedPanelField.LISTA}
            icon={<BarsOutlined />}
            title="Lista">
            <Menu.Item key={SelectedPanelField.LISTA_AUTO}>
              <Link href="/lista/auto">
                <a>Auto</a>
              </Link>
            </Menu.Item>

            <Menu.Item key={SelectedPanelField.LISTA_UZYTKOWNIK}>
              <Link href="/lista/uzytkownik">
                <a>Uzytkownik</a>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            icon={<DatabaseOutlined />}
            key={SelectedPanelField.ARCHIWUM}>
            <Link href="/archiwum">
              <a>Archwium</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            key={SelectedPanelField.RAPORTY}
            icon={<PieChartOutlined />}>
            <Link href="/raporty">
              <a>Raporty</a>
            </Link>
          </Menu.Item>

          <SubMenu
            style={{ marginLeft: "10vw" }}
            key={SelectedPanelField.LOGIN}
            icon={<UserOutlined />}
            title={username}>
            <Menu.Item
              style={{ justifySelf: "flex-end" }}
              key={SelectedPanelField.LOGIN_OUT}
              icon={<LogoutOutlined />}
              onClick={() => {
                // console.log(
                //   "PRZED localStorage",
                //   localStorage.getItem("token")
                // );
                // console.log("PRZED", Cookies.get("token"));
                Cookies.remove("token");
                localStorage.removeItem("token");
                // console.log("PO", Cookies.get("token"));
                // console.log("PO localStorage", localStorage.getItem("token"));
              }}>
              <Link href="/login">
                <a>Wyloguj</a>
              </Link>
            </Menu.Item>
          </SubMenu>
        </StyledMenu>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px", backgroundColor: "fff" }}>
            <div
              className=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                ...(flexCenter
                  ? { alignItems: "center", justifyContent: "center" }
                  : null),
              }}>
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  {routePathSplit.map((path, index) => {
                    const hrefPath = routePathSplit
                      .slice(0, index + 1)
                      .join("/");
                    return (
                      <Breadcrumb.Item key={index}>
                        <Link href={`/${hrefPath}`} as={`/${hrefPath}`}>
                          <a>{path}</a>
                        </Link>
                      </Breadcrumb.Item>
                    );
                  })}
                </Breadcrumb>
                {children}
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Savoir Group</Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default LayoutM;

const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;

  &::nth-child(3) {
    background-color: red;
    color: green;
  }
`;

{
  /* <Menu.Item key="3">
              <Link href="/dodaj/merchandiser">
                <a>Merchandiser</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="3-1">
              <Link href="/dodaj/merchandiser-mobilny">
                <a>Merchandiser mobilny</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="3-2">
              <Link href="/dodaj/hostessa">
                <a>Hostessa</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="3-3">
              <Link href="/dodaj/biuro">
                <a>Biuro</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="3-4">
              <Link href="/dodaj/inne">
                <a>Inne</a>
              </Link>
            </Menu.Item> */
}
{
  /* <Menu.ItemGroup></Menu.ItemGroup> */
}
{
  /* <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link href="/">Zarządzaj</Link>
            </Menu.Item> */
}
{
  /* <Menu.Item key="8">
              <Link href="/rekrutacje/biuro" as={"/rekrutacje/biuro"}>
                <a>Biuro</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link href="/rekrutacje/hostessa">
                <a>Hostessa/TK</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link href="/rekrutacje/mobilny-ph">
                <a>Merchandiser Mobilny/PH</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link href="/rekrutacje/inne">
                <a>Inne</a>
              </Link>
            </Menu.Item> */
}
{
  /* <Header
            className="site-layout-background"
            style={{
              color: "white",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}>
            <img
              src="/logo/savoir-logo.png"
              alt="samsung logo"
              style={{ height: "80%", marginRight: "40px" }}
            />
          </Header> */
}
