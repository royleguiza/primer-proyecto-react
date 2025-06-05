function Header() {
    return (
      <header className="bg-[#FFE600] p-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-white text-2xl font-bold">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIRpAFZt4h27VRAqDZzPdvhMPLx2raH834g&s" 
                alt="logo-mercado-libre"
                className="w-[200px] h-[40px] object-cover object-center" />
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a className="text-[#1f1f1f] hover:text-[#1f1f1f] hover:underline transition duration-300">
                  Ofertas
                </a>
              </li>
              <li>
                <a className="text-[#1f1f1f] hover:text-[#1f1f1f] hover:underline transition duration-300">
                  Mis Compras
                </a>
              </li>
              <li>
                <a
                  className="text-[#1f1f1f] hover:text-[#1f1f1f] hover:underline transition duration-300"
                >
                  Mis Favoritos
                </a>
              </li>
              <li>
                <a className="text-[#1f1f1f] hover:text-[#1f1f1f] hover:underline transition duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-[#1f1f1f] hover:fill--[#1f1f1f] transition duration-300"
                    >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
export default Header;
  