import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 mt-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a href="/devPage" className="link link-hover">Development</a>
          <a href="/designpage" className="link link-hover">Design</a>
          <a href="/hostingpage" className="link link-hover">Hosting</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>
          <a href="presskit" className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a href="/PrivacyPolicy" className="link link-hover">Terms of use</a>
          <a href="/PrivacyPolicy" className="link link-hover">Privacy policy</a>
          <a href="/PrivacyPolicy" className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img
            src="/assets/shopping-bagwithouteyes.png"
            alt="Logo"
            width={50}
          />
          <p>
            ShoopinGWorld Designed by amadich (Mohamed Jeridi)
            <br />
            <span className="text-xs">
              © 2024 ShoopinGWorld. All rights reserved{" "}
              <Link to={"https://amadich.tn"} target="_blank">
                <span className="text-green-600">amadich</span>
              </Link>{" "}
            </span>
          </p>
        </aside>

        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            

            {/* GitHub Icon */}
            <a href="https://github.com/amadich" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2c-5.528 0-10 4.472-10 10 0 4.418 2.867 8.167 6.84 9.487.5.092.682-.21.682-.468 0-.231-.009-.854-.014-1.674-2.782.604-3.366-1.345-3.366-1.345-.454-1.155-1.109-1.466-1.109-1.466-.907-.62.069-.609.069-.609 1.004.071 1.532 1.034 1.532 1.034.893 1.525 2.345 1.085 2.916.829.093-.649.35-1.085.635-1.335-2.223-.251-4.557-1.112-4.557-4.952 0-1.092.39-1.981 1.029-2.682-.103-.251-.445-1.255.099-2.614 0 0 .839-.268 2.746 1.02 1.841-.513 3.818-.511 5.667 0 1.899-1.288 2.746-1.02 2.746-1.02.544 1.359.202 2.363.099 2.614.639.701 1.029 1.59 1.029 2.682 0 3.845-2.337 4.7-4.564 4.94.359.308.678.919.678 1.847 0 1.334-.014 2.412-.014 2.739 0 .261.18.563.686.469 3.98-1.32 6.85-5.069 6.85-9.487 0-5.528-4.472-10-10-10z"></path>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/amadich/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4.986 3c0-1.104.888-2 1.978-2 1.09 0 1.978.896 1.978 2 0 1.093-.888 2-1.978 2-1.09 0-1.978-.907-1.978-2zm-.004 20h3.957v-12h-3.957v12zm7.679-11.207c0-1.439.482-2.445 1.68-2.445 1.067 0 1.569.724 1.569 1.614v4.588h3.954v-5.458c0-3.264-1.972-4.82-4.594-4.82-2.319 0-3.402 1.222-3.966 2.69h-.029v-2.325h-3.958v12h3.957v-6.645z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
