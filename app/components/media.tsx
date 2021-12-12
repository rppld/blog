import * as React from "react";
import createMarkup from "../utils/create-markup";

interface Props {
  caption?: string;
  children: React.ReactNode;
}

export default function Media({ children, caption, ...props }: Props) {
  return (
    <figure {...props}>
      <div className="-ml-2 -mr-2 p-2 bg-white rounded-lg shadow">
        {children}
      </div>

      {caption && (
        <figcaption
          className="pt-2 italic"
          dangerouslySetInnerHTML={createMarkup(caption, {
            renderInline: true,
          })}
        />
      )}
    </figure>
  );
}
