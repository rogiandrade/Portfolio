import * as Menubar from "@radix-ui/react-menubar";
import { changeLocale } from "../../contexts/changeLocaleProvider";
import { Link } from "react-router-dom";

export function MenuBar() {

    return (
        <>
            <div className="navbar">

                <Menubar.Root className="menubarRoot">

                    <Menubar.Menu>
                        <Menubar.Trigger className="menubarTrigger">
                            <Link to="/">
                                {changeLocale('header', 'HOME')}
                            </Link>
                        </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger">
                            <Link to="/about">
                                {changeLocale('header', 'ABOUT ME')}
                            </Link>
                        </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger">
                            <Link to="/services">
                                {changeLocale('header', 'SERVICES')}
                            </Link>
                        </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger">
                            <Link to="/projects">
                                {changeLocale('header', 'PROJECTS')}
                            </Link>
                        </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger">
                            <Link to="/contacts">
                                {changeLocale('header', 'CONTACTS')}
                            </Link>
                        </Menubar.Trigger>
                    </Menubar.Menu>

                </Menubar.Root>

            </div>
        </>
    )

}