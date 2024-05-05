import Link from "next/link";

const Header = () => {
  return (
    <section className="relative bg-transparent">
      <div className="h-[120px] w-full flex justify-between items-center">
        <h5>Sm Ashraful</h5>
        <ul className="flex-1 flex  justify-center items-center gap-5 text-xl ">
          <li className="px-3 py-2">
            <Link href="/">Home</Link>
          </li>
          <li className="px-3 py-2">
            <Link href="/">About</Link>
          </li>
          <li className="px-3 py-2">
            <Link href="/">Service</Link>
          </li>
          <li className="px-3 py-2">
            <Link href="/">Projects</Link>
          </li>
          <li className="px-3 py-2">
            <Link href="/">My Labs</Link>
          </li>
          <li className="px-3 py-2">
            <Link href="/">Testimonial</Link>
          </li>
        </ul>
        <div>
          <button className="flex items-center gap-2 px-5 py-2 bg-darkGold text-black font-medium rounded-md">
            Let&apos;s Discuss
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4267 5.65166C11.383 5.53914 11.3176 5.43634 11.2342 5.34916L6.65083 0.76583C6.56536 0.680362 6.4639 0.612565 6.35223 0.566309C6.24056 0.520054 6.12087 0.496246 6 0.496246C5.75589 0.496246 5.52178 0.593219 5.34917 0.76583C5.2637 0.851299 5.1959 0.952765 5.14965 1.06444C5.10339 1.17611 5.07958 1.29579 5.07958 1.41666C5.07958 1.66077 5.17656 1.89489 5.34917 2.0675L8.37417 5.08333H1.41667C1.17355 5.08333 0.940394 5.17991 0.768486 5.35182C0.596577 5.52372 0.5 5.75688 0.5 6C0.5 6.24311 0.596577 6.47627 0.768486 6.64818C0.940394 6.82009 1.17355 6.91666 1.41667 6.91666H8.37417L5.34917 9.9325C5.26325 10.0177 5.19505 10.1191 5.14852 10.2308C5.10198 10.3425 5.07802 10.4623 5.07802 10.5833C5.07802 10.7043 5.10198 10.8242 5.14852 10.9359C5.19505 11.0476 5.26325 11.1489 5.34917 11.2342C5.43438 11.3201 5.53577 11.3883 5.64747 11.4348C5.75918 11.4814 5.87899 11.5053 6 11.5053C6.12101 11.5053 6.24082 11.4814 6.35253 11.4348C6.46423 11.3883 6.56562 11.3201 6.65083 11.2342L11.2342 6.65083C11.3176 6.56365 11.383 6.46085 11.4267 6.34833C11.5184 6.12516 11.5184 5.87484 11.4267 5.65166Z"
                fill="#090F1A"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
