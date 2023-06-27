import { FC, PropsWithChildren } from "react";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex justify-center items-center">{children}</div>;
};
