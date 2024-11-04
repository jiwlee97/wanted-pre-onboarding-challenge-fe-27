import { cn } from "@/shared/lib";
import { lazy, memo, Suspense } from "react";

type IconSize = "xsmall" | "small" | "medium" | "large";

const IconSizeClassName: Record<IconSize, string> = {
  xsmall: "w-3 h-3 mw-3 mh-3",
  small: "w-4 h-4 mw-4 mh-4",
  medium: "w-5 h-5 mw-5 mh-5",
  large: "w-6 h-6 mw-6 mh-6",
};

type Props = {
  name: "close";
  size: IconSize;
  disabled?: boolean;
  className?: string;
};

export const Icon = memo((props: Props) => {
  const { name, size = "small", disabled = false, className = "" } = props;

  const iconPath = `../../../public/assets/icons/${name}.svg?react`;
  const IconComponent = lazy(() => import(iconPath));

  return (
    <Suspense fallback={<div className={IconSizeClassName[size]} />}>
      <IconComponent
        className={cn(
          `${IconSizeClassName[size]} ${disabled ? "fill-gray" : "fill-black"}`,
          className
        )}
      />
    </Suspense>
  );
});
