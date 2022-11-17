import { FC } from "react";

interface iText {
  caption?: string | number;
}

const Text: FC<iText> = ({ caption }) => {
  return (
    <p className="text-base font-bold py-1 text-text-primary  text-gray-700 dark:text-gray-400">
      {caption}
    </p>
  );
};

export default Text;
