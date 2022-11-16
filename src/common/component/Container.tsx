import { FC } from "react";
import classnames from "classnames";

interface iContainer {
  bgColor?: string;
  center?: boolean;
  children?: React.ReactNode;
}

const Container: FC<iContainer> = ({ bgColor, center = false, children }) => {
  return (
    <div
      className={classnames(
        `flex justify-center mx-auto bg-${bgColor}  min-h-screen`,
        {
          "items-center": center,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Container;
