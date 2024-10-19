import "../../../assets/styles/MainCatalog.css";

export default function Main_Catalog_menu() {
  return (
    <div className=" flex w-[80%] m-auto  mt-10 space-x-4 font-bold ">
          <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] lg:mb-64 w-36">
              
              <li>
                  <details>
                    <summary id="ccb">Parent item</summary>
                  </details>
              </li>
            </ul>
            <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] lg:mb-64 w-36">
              <li>
                  <details>
                    <summary id="ccb">Parent item</summary>
                  </details>
              </li>
          </ul>
          <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] lg:mb-64 w-36">
              <li>
                  <details>
                    <summary id="ccb">Parent item</summary>
                  </details>
              </li>
          </ul>

          <ul className="menu lg:menu-horizontal bg-[#dfdcdc] rounded-[50px] lg:mb-64 w-36">

              <li>
                  <details>
                    <summary id="ccb">Parent item</summary>
                  </details>
              </li>

          </ul>
    </div>
  )
}
