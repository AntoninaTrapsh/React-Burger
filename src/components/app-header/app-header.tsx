import React, {FC} from "react";
import Navigation from "./components/navigation/navigation";

const AppHeader: FC = () => {
    return (
        <header className="text text_type_main-default">
            <Navigation/>
        </header>
    )
}

export default AppHeader;
