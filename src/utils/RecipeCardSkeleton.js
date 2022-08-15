import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function RecipeCardSkeleton() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((el) => (
        <Stack spacing={1} key={el}>
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Stack>
      ))}
    </>
  );
}
