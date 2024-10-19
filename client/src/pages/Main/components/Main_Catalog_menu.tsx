import "../../../assets/styles/MainCatalog.css";

interface MainCatalogMenuProps {
  setSortCriteria: (criteria: string) => void;
}

const Main_Catalog_menu: React.FC<MainCatalogMenuProps> = ({ setSortCriteria }) => {
  const scrollToHeadphoneType = () => {
    const element = document.getElementById('headphonestype');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSortChange = (criteria: string) => {
    setSortCriteria(criteria);
  };

  return (
    <>
      <div className="flex items-center justify-between w-[80%] mt-10 ">
        <div className="flex items-center m-auto space-x-4 font-bold">
          <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] w-42">
            <li>
              <details>
                <summary onClick={scrollToHeadphoneType} id="ccb" className="cursor-pointer">
                  Headphone Type
                </summary>
              </details>
            </li>
          </ul>
          <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] w-42">
            <li>
              <details>
                <summary id="ccb">Parent item</summary>
              </details>
            </li>
          </ul>

          <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] w-42">
            <li>
              <details>
                <summary id="ccb">Parent item</summary>
              </details>
            </li>
          </ul>


          <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] w-42">
            <li>
              <details>
                <summary id="ccb">Parent item</summary>
              </details>
            </li>
          </ul>
          {/* Additional menu items */}
        </div>

        <div className="flex items-center">
          <ul className="menu lg:menu-horizontal border bg-transparent rounded-[50px] w-42">
            <li>
              <details>
                <summary id="ccb" className="text-center font-bold">Sort By</summary>
                <ul className="p-2 space-y-1 bg-white ">
                  <li>
                    <button
                      onClick={() => handleSortChange('name')}
                      className="w-full text-left hover:bg-gray-200"
                    >
                      Name
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSortChange('price')}
                      className="w-full text-left hover:bg-gray-200"
                    >
                      Price
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main_Catalog_menu;
