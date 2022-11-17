import { FC } from "react";
import classnames from "classnames";

interface iContainer {
  bgColor?: string;
  center?: boolean;
  children?: React.ReactNode;
  fullScreen?: boolean;
  justify?: string;
  style?: string;
}

const Container: FC<iContainer> = ({
  bgColor,
  center = false,
  fullScreen = false,
  justify = "center",
  style,
  children,
}) => {
  return (
    <div
      className={classnames(
        `flex w-full flex-wrap mx-auto  bg-${bgColor} justify-${justify} ${style}`,
        {
          "items-center": center,
          "min-h-screen": fullScreen,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Container;
