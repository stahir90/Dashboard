import { FC } from "react";
import Text from "./Text";
import Header, { HeaderTypes } from "./Header";

interface iCard {
  bgColor?: string;
  title?: string;
  middle?: string | number;
  last?: string | number;
}

const Card: FC<iCard> = ({ title, middle, last }) => {
  return (
    <div className="block my-4 mx-4 space-y-4 w-60 h-40 divide-black divide-y max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Header type={HeaderTypes.H5}>{title}</Header>
      <Text caption={middle} />
      <Text caption={last} />
    </div>
  );
};

export default Card;
