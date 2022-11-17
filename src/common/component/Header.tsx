import { FC } from "react";
import classNames from "classnames";

interface iHeader {
  type: HeaderTypes;
}

export enum HeaderTypes {
  H1,
  H2,
  H5,
}

const Header: FC<iHeader> = ({ type, children }) => {
  switch (type) {
    case HeaderTypes.H1:
      return (
        <h1
          className={classNames(
            `mx-8 my-8 leading-5 font-bold sm:text-5xl text-3xl text-light-blue`
          )}
        >
          {children}
        </h1>
      );
    case HeaderTypes.H2:
      return (
        <h2 className={classNames(`mb-2 leading-5 font-bold `)}>{children}</h2>
      );
    case HeaderTypes.H5:
      return (
        <h5 className={classNames(`mb-2 leading-5 font-bold`)}>{children}</h5>
      );
    default:
      <h1>{children}</h1>;
  }

  return <h1>{children}</h1>;
};

export default Header;
