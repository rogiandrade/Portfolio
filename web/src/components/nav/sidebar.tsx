import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Link } from "react-router-dom"
import { changeLocale } from "../../contexts/changeLocaleProvider"

export function SideBar() {

    return (

        <DropdownMenu.Root>

            <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    <HamburgerMenuIcon width={25} height={25} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>

                    <DropdownMenu.Item className="DropdownMenuItem">
                        <Link to="/">
                            {changeLocale('header', 'HOME')}
                        </Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Item className="DropdownMenuItem">
                        <Link to="/about">
                            {changeLocale('header', 'ABOUT ME')}
                        </Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Item className="DropdownMenuItem">
                        <Link to="/services">
                            {changeLocale('header', 'SERVICES')}
                        </Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Item className="DropdownMenuItem">
                        {changeLocale('header', 'PROJECTS')}
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Item className="DropdownMenuItem">
                        {changeLocale('header', 'CONTACTS')}
                    </DropdownMenu.Item>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>

        </DropdownMenu.Root >
    )
}