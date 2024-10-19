import "../../../assets/styles/MainCatalog.css";

export default function Main_Catalog_menu() {
  return (
    
    <>
        <div className="flex items-center justify-between w-[80%] mt-10 ">
                      <div className=" flex items-center m-auto   space-x-4 font-bold ">
                        
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

                        <div className="flex items-center">
                            <ul className="menu lg:menu-horizontal border bg-transparent rounded-[50px] lg:mb-64 w-36">
                                    
                                    <li>
                                        <details>
                                          <summary id="ccb" className="text-center font-bold">Sert By</summary>
                                        </details>
                                    </li>
                            </ul>
                        </div>
        </div>
    </>

  )
}
