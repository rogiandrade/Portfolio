import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

export function NavigationMenuVLins() {

    return(
        <NavigationMenu.Root className='navigationMenuRoot'>
                <NavigationMenu.List className='navigationMenuList'>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className='navigationMenuTrigger'>
                            <CaretDownIcon className='caretDown' aria-hidden />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navigationMenuContentVLins'>
                            <NavigationMenu.Link>
                                <a
                                    className='links'
                                    href='https://www.draveronicalins.com'
                                    target='_blank'
                                >
                                    <img className='linkIcon' src="globe.svg" alt="globe" />
                                    Website
                                </a>
                                <DropdownMenu.Separator className="DropdownMenuSeparator" />
                                <a
                                    className='links'
                                    href='https://github.com/rogiandrade/VLins-Website'
                                    target='_blank'
                                >
                                    <img className='linkIcon' src="github-logo.svg" alt="globe" />
                                    GitHub
                                </a>
                            </NavigationMenu.Link>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
    )
}

export function NavigationMenuHabits() {

    return(
        <NavigationMenu.Root className='navigationMenuRoot'>
                <NavigationMenu.List className='navigationMenuList'>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className='navigationMenuTrigger'>
                            <CaretDownIcon className='caretDown' aria-hidden />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navigationMenuContent'>
                            <NavigationMenu.Link>
                                <a
                                    className='links'
                                    href='https://github.com/rogiandrade/NLWSetup'
                                    target='_blank'
                                >
                                    <img className='linkIcon' src="github-logo.svg" alt="globe" />
                                    GitHub
                                </a>
                            </NavigationMenu.Link>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
    )
}

export function NavigationMenuPokeDev() {

    return(
        <NavigationMenu.Root className='navigationMenuRoot'>
                <NavigationMenu.List className='navigationMenuList'>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className='navigationMenuTrigger'>
                            <CaretDownIcon className='caretDown' aria-hidden />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navigationMenuContent'>
                            <NavigationMenu.Link>
                                <a
                                    className='links'
                                    href='https://github.com/rogiandrade/Desafio-FullStack'
                                    target='_blank'
                                >
                                    <img className='linkIcon' src="github-logo.svg" alt="globe" />
                                    GitHub
                                </a>
                            </NavigationMenu.Link>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
    )
}

export function NavigationMenuBliss() {

    return(
        <NavigationMenu.Root className='navigationMenuRoot'>
                <NavigationMenu.List className='navigationMenuList'>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className='navigationMenuTrigger'>
                            <CaretDownIcon className='caretDown' aria-hidden />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navigationMenuContent'>
                            <NavigationMenu.Link>
                                <a
                                    className='links'
                                    href='https://github.com/rogiandrade/Challenge-Bliss'
                                    target='_blank'
                                >
                                    <img className='linkIcon' src="github-logo.svg" alt="globe" />
                                    GitHub
                                </a>
                            </NavigationMenu.Link>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
    )
}