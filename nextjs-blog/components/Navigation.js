import Link from "next/link";

export const Nav = () => {
  return (
    <>
      <h2>
        <Link href="/">
          <a>Projects</a>
        </Link>
      </h2>
      <h2>
        <Link href="/about">
          <a>About</a>
        </Link>
      </h2>
      <h2>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </h2>
    </>
  );
};
