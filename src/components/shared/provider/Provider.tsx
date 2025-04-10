import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import antdTheme from "@/antdTheme";

export default async function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ConfigProvider theme={antdTheme}>
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
    </NextIntlClientProvider>
  );
}
