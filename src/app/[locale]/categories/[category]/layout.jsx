import React, { Suspense } from "react";
import Loading from "../../loading";

export default function layout({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
