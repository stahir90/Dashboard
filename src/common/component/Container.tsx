import { FC } from "react";
import classnames from "classnames";

interface iContainer {
  bgColor?: string;
  center?: boolean;
  children?: React.ReactNode;
  fullScreen?: boolean;
  justify?: string;
  styles?: string;
}

const Container: FC<iContainer> = ({
  bgColor,
  center = false,
  fullScreen = false,
  justify = "center",
  styles,
  children,
}) => {
  return (
    <div
      className={classnames(
        `flex w-full flex-wrap mx-auto  bg-${bgColor} justify-${justify} ${styles}`,
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
