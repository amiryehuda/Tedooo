import React from "react";
import { Layout } from "../../global-style";

interface ComingSoonProps {
  pageName: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ pageName }) => {
  return (
    <Layout>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "26px" }}
      >
        page {pageName} coming soon
      </div>
    </Layout>
  );
};

export default ComingSoon;
