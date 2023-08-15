import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as Menubar from "@radix-ui/react-menubar";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "@radix-ui/react-select";
import * as Switch from "@radix-ui/react-switch";
import React from "react";

const countries = { brazil: 'PT-BR', usa: 'EN', france: 'FR', spain: 'ES' }; 

export function Header() {

    const [value, setValue] = React.useState('brazil');

    const switchDemo = () => (

        <form>

            <div style={{ display: 'flex', alignItems: 'center' }}>

                <label className="Label">
                    <img className="sun" src="sun.svg" alt="sun" />
                </label>

                <Switch.Root className="SwitchRoot" id="airplane-mode">
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>

                <label className="Label">
                    <img className="moon" src="moon.svg" alt="moon" />
                </label>

            </div>

        </form>
    );

    const selectItem = () => (

        <Select.Root
            value={value}
            onValueChange={setValue}
        >
            <Select.Trigger className="selectTrigger">

                <Select.Value
                    aria-label={value}
                    placeholder="Select a language..."
                >
                    {countries[value]}
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
                    <Select.ScrollUpButton className="SelectScrollButton">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    <Select.Viewport className="selectViewport">
                        <Select.Group>
                            <SelectItem value="brazil" >
                                <img className="flags" src="brazilflag.svg" alt="bandeira do Brasil" />
                                PT-BR
                            </SelectItem>
                            <Select.Separator className="SelectSeparator" />
                            <SelectItem value="usa">
                                <img className="flags" src="usaflag.svg" alt="flag of USA" />
                                EN
                            </SelectItem>
                            <Select.Separator className="SelectSeparator" />
                            <SelectItem value="france">
                                <img className="flags" src="franceflag.svg" alt="drapeau Français" />
                                FR
                            </SelectItem>
                            <Select.Separator className="SelectSeparator" />
                            <SelectItem value="spain">
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

        <header>

            <div className="navbar">

                <Menubar.Root className="menubarRoot">

                    <Menubar.Menu>
                        <Menubar.Trigger className="menubarTrigger"> HOME </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger"> SOBRE MIM </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger"> SERVIÇOS </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger"> PROJETOS </Menubar.Trigger>
                        <Menubar.Trigger className="menubarTrigger"> CONTATOS </Menubar.Trigger>
                    </Menubar.Menu>

                </Menubar.Root>

            </div>

            <div className="options">
                {switchDemo()}
                {selectItem()}
            </div>

        </header>
    )
}