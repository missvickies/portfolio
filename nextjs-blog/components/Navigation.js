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
        <Link href="/projects/about">
          <a>About</a>
        </Link>
      </h2>
      <a href="">
        <p>github</p>
      </a>
      <a href="">
        <p>linkedIn</p>
      </a>
      <a href="">
        <p>Codepen</p>
      </a>
    </>
  );
};
