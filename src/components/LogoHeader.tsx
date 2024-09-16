import logo from "/img/logo.png";

function LogoHeader() {
  return (
    <header>
      <div className="container mx-auto p-4 flex items-center">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            width="150px"
            alt="Logo"
            className="h-8 w-auto mr-4"
          />
        </a>
      </div>
    </header>
  );
}

export default LogoHeader;
