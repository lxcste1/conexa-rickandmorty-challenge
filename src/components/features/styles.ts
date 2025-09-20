import { cva, type VariantProps } from "class-variance-authority";

export const statusVariants = cva("", {
  variants: {
    status: {
      Alive: "bg-green-500",
      Dead: "bg-red-500",
      unknown: "bg-gray-500",
    },
  },
  defaultVariants: {
    status: "unknown",
  },
});

export type StatusVariantsProps = VariantProps<typeof statusVariants>;
