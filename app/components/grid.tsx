import clsx from "clsx";
import * as React from "react";

interface ContextProps {
  hasAside: boolean;
}

const GridContext = React.createContext<Partial<ContextProps>>({});

export function Container({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>): React.ReactElement {
  let childrenNames =
    React.Children.map(props.children, function (child) {
      if (React.isValidElement(child) && typeof child.type !== "string") {
        return child.type.name;
      }
    }) || [];
  let value = {
    hasAside: childrenNames.filter((name) => name === "Aside").length > 0,
  };

  return (
    <GridContext.Provider value={value}>
      <div
        className={clsx(
          "grid items-start grid-cols-1 gap-6 md:grid-cols-12",
          className
        )}
        {...props}
      />
    </GridContext.Provider>
  );
}

export function Aside({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>): React.ReactElement {
  return <div className={clsx("md:col-span-2", className)} {...props} />;
}

export function Main({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>): React.ReactElement {
  const context = React.useContext(GridContext);

  if (!context) {
    throw new Error("Grid.Main must be used within a Grid.Container.");
  }

  const { hasAside } = context;

  return (
    <div
      className={clsx(
        "md:col-span-10",
        !hasAside && "md:col-start-3",
        className
      )}
      {...props}
    />
  );
}
