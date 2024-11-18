import { IoLanguageSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer bg-base-200 text-base-content p-10">
      <aside>
        <h1 className="text-xl font-bold flex items-center gap-2">
          Lingo Bingo <IoLanguageSharp size={20}></IoLanguageSharp>
        </h1>
        <p>
          Lingo Bingo LLC.
          <br />
          Providing reliable tech since 2011
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </div>
  );
};

export default Footer;
