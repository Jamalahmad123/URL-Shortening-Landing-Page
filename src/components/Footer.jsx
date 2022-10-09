import { features, resources, company, socialLinks } from "../data/data";
import logo from "../assets/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-VeryDarkViolet py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-2 md:flex-row md:items-start md:justify-start md:gap-0">
        <div className="flex-1">
          <img src={logo} alt="logo" className="w-24 object-cover" />
        </div>
        <div className="grid grid-cols-1 gap-14 text-center md:grid-cols-3 lg:grid-cols-4 md:text-left">
          <div className="space-y-4">
            <h3 className="text-lightGray text-lg font-semibold capitalize">
              Features
            </h3>
            <div className="flex flex-col gap-2">
              {features.map((item) => (
                <a
                  href="#"
                  className="text-Gray capitalize hover:text-Cyan"
                  key={item.id}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h3 className="text-lightGray text-lg font-semibold capitalize">
                resources
              </h3>
              <div className="flex flex-col gap-2">
                {resources.map((item) => (
                  <a
                    href="#"
                    className="text-Gray capitalize hover:text-Cyan"
                    key={item.id}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h3 className="text-lightGray text-lg font-semibold capitalize">
                company
              </h3>
              <div className="flex flex-col gap-2">
                {company.map((item) => (
                  <a
                    href="#"
                    className="text-Gray capitalize hover:text-Cyan"
                    key={item.id}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            {socialLinks.map((icon) => (
              <a
                href="#"
                className="text-lightGray hover:text-Cyan"
                key={icon.id}
              >
                <icon.Icon size={25} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* */
