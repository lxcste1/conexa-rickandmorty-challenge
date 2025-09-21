import { cva, type VariantProps } from "class-variance-authority";

export const statusVariants = cva("", {
  variants: {
    status: {
      Alive: "bg-secondary text-secondary-foreground",
      Dead: "bg-red-600 text-secondary-foreground",
      unknown: "bg-gray-500 text-secondary-foreground",
    },
  },
  defaultVariants: {
    status: "unknown",
  },
});

export type StatusVariantsProps = VariantProps<typeof statusVariants>;
