import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Menubar from "@radix-ui/react-menubar";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "@radix-ui/react-select";
import * as Switch from "@radix-ui/react-switch";
import { useDarkMode, DarkModeContextType } from "../contexts/colorsProvider";
import { changeLocale } from "../contexts/changeLocaleProvider";
import { useHeader } from "../contexts/headerProvider";
import { Link, Outlet } from "react-router-dom";

const countries = { 'pt-br': 'PT-BR', 'en-us': 'EN', 'fr-eu': 'FR', 'es-eu': 'ES' } as { [value: string]: string };

interface headerProps { }

export function Header({ }: headerProps) {

    const { locale, setLocale } = useHeader();

    const switchDemo = () => {

        const context = useDarkMode();

        if (!context) {
            return null;
        }

        const { toggleDarkMode }: DarkModeContextType = context;

        return (
            <form>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label className="label">
                        <img className="sun" src="sun.svg" alt="sun" />
                    </label>

                    <Switch.Root
                        className="switchRoot"
                        id="airplane-mode"
                        onClick={toggleDarkMode}
                    >
                        <Switch.Thumb className="switchThumb" />
                    </Switch.Root>

                    <label className="label">
                        <img className="moon" src="moon.svg" alt="moon" />
                    </label>
                </div>
            </form>
        );
    };

    const selectItem = () => (

        <Select.Root
            value={locale}
            onValueChange={setLocale}
        >
            <Select.Trigger className="selectTrigger">

                <Select.Value
                    aria-label="PT-BR"
                    placeholder="Select a language..."
                >
                    {countries[locale]}
                </Select.Value>

                <Select.Icon className="selectIcon">
                    <ChevronDownIcon fill="#7E5DCA" />
                </Select.Icon>

            </Select.Trigger>

            <Select.Portal>

                <Select.Content
                    className="selectContent"
                    position="popper"
                    sideOffset={5}
                >

                    <Select.Viewport className="selectViewport">
                        <Select.Group>
                            <SelectItem value="pt-br">
                                <img className="flags" src="brazilflag.svg" alt="bandeira do Brasil" />
                                PT-BR
                            </SelectItem>
                            <Select.Separator className="selectSeparator" />
                            <SelectItem value="en-us">
                                <img className="flags" src="usaflag.svg" alt="flag of USA" />
                                EN
                            </SelectItem>
                            <Select.Separator className="selectSeparator" />
                            <SelectItem value="fr-eu">
                                <img className="flags" src="franceflag.svg" alt="drapeau Français" />
                                FR
                            </SelectItem>
                            <Select.Separator className="selectSeparator" />
                            <SelectItem value="es-eu">
                                <img className="flags" src="spanishflag.svg" alt="bandera Española" />
                                ES
                            </SelectItem>
                        </Select.Group>
                    </Select.Viewport>

                </Select.Content>

            </Select.Portal>

        </Select.Root>
    );

    return (
        <>
            <header>

                <div className="navbar">

                    <Menubar.Root className="menubarRoot">

                        <Menubar.Menu>
                            <Menubar.Trigger className="menubarTrigger">
                                <Link to="/about">
                                    {changeLocale('header', 'ABOUT ME')}
                                </Link>
                            </Menubar.Trigger>
                            <Menubar.Trigger className="menubarTrigger">
                                {changeLocale('header', 'SERVICES')}
                            </Menubar.Trigger>
                            <Menubar.Trigger className="menubarTrigger">
                                {changeLocale('header', 'PROJECTS')}
                            </Menubar.Trigger>
                            <Menubar.Trigger className="menubarTrigger">
                                {changeLocale('header', 'CONTACTS')}
                            </Menubar.Trigger>
                        </Menubar.Menu>

                    </Menubar.Root>

                </div>

                <div className="options">
                    {switchDemo()}
                    {selectItem()}
                </div>

            </header>
            <Outlet /></>
    )
}