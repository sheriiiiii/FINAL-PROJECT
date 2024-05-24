import { type ReactNode, useEffect } from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Redirector() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  return <div />;
}

export default function ProtectedTemplate(props: {
  children: ReactNode | string;
}) {
  return (
    <>
      <SignedOut>
        <Redirector />
      </SignedOut>
      <SignedIn>{props.children}</SignedIn>
    </>
  );
}
