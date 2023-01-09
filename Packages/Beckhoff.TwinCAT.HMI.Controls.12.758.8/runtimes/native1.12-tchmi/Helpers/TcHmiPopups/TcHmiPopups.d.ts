declare module TcHmi.Controls.Helpers {
    abstract class Popup<T> {
        protected __parentControl: TcHmi.Controls.System.baseTcHmiControl;
        protected __name: string;
        protected __element: HTMLDivElement;
        protected __elementHeader: HTMLHeadingElement;
        protected __elementContent: HTMLDivElement;
        protected __elementFooter: HTMLDivElement;
        protected __childControls: TcHmi.Controls.System.baseTcHmiControl[];
        protected __destroyers: DestroyFunction[];
        protected __prompt: {
            answer: (value: T | PromiseLike<T>) => void;
            error: (reason?: Error) => void;
        } | null;
        protected __isShowing: boolean;
        protected __backgroundAction: Popup.BackgroundAction<string>;
        protected readonly __className = "TcHmi_Controls_Helpers_Popup";
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        /**
         * Creates a new Popup instance.
         * @param __parentControl The control which owns the popup.
         */
        constructor(__parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Shows the popup.
         */
        show(): void;
        /**
         * Hides the popup.
         */
        hide(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        prompt(): Promise<T>;
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Gets a value indicating if the popup is currently shown to the user.
         */
        isShowing(): boolean;
        /**
         * Sets what happens when the user clicks the background while the popup is showing. Default is { close: true }.
         * Note: It is currently not possible to change the close on background-click behavior when the popup is currently showing.
         * @param action The action to perform when the user clicks the background. If the popup should be closed, further action can be specified.
         */
        setBackgroundAction(action: Popup.BackgroundAction<string>): void;
        /**
         * Performs the background action. Must be implemented by inheriting classes.
         */
        protected abstract __performBackgroundAction(): void;
        /**
         * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
         * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
         * @param localization The localization to watch.
         * @param onChange The callback that is called with the localized and formatted text as a parameter.
         */
        protected __watchLocalization(name: string, localization: Popup.FormattedLocalization, onChange: (localizedText: string) => void): void;
        /**
         * Destroys the localization watch with the given name, if it exists.
         * @param name The name that was used with __watchLoclalization to start watching the symbol.
         */
        protected __unwatchLocalization(name: string): void;
    }
    module Popup {
        type Localization = string | FormattedLocalization;
        interface FormattedLocalization {
            symbol: string;
            formatValues: any[];
        }
        type BackgroundAction<A extends string> = {
            close: false;
        } | {
            close: true;
            action?: A;
        };
    }
}
declare module TcHmi.Controls.Helpers {
    class TextAndButtonsPrompt<T> extends Popup<T> {
        protected __buttons: Map<string, {
            value: T;
            button: Beckhoff.TcHmiButton;
        }>;
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        /**
         * Creates a new TextAndButtonsPrompt instance.
         * @param localizations A collection of localization symbol expressions to localize texts in the control.
         * @param buttons A collection of attributes to generate buttons from and the value that should be used in the prompt answer for each button.
         * @param parentControl The control which owns the popup.
         */
        constructor(buttons: Dictionary<{
            value: T;
            attributes: Dictionary<any>;
        }>, parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Creates a handler for the pressed event of a button.
         * @param value The value that should be used to answer the prompt when the button is clicked.
         */
        protected __createPressedHandler(value: T): () => void;
        /**
         * Returns the created buttons.
         */
        getButtons(): Map<string, {
            value: T;
            button: Beckhoff.TcHmiButton;
        }>;
        /**
         * Sets what happens when the user clicks the background while the popup is showing.
         * @param action The action to perform when the user clicks the background. If the popup should be closed,
         * you can specify the name of a button to get the prompt to be answered as if this button was clicked.
         */
        setBackgroundAction(action: Popup.BackgroundAction<string>): void;
        /**
         * Performs the background action.
         */
        protected __performBackgroundAction(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<TextAndButtonsPrompt.LocalizableTexts>): void;
    }
    module TextAndButtonsPrompt {
        interface LocalizableTexts {
            headerText: Popup.Localization;
            contentText: Popup.Localization;
        }
    }
}
declare module TcHmi.Controls.Helpers {
    abstract class OkCancelPrompt<T> extends Popup<{
        isOk: true;
        value: T;
    } | {
        isOk: false;
    }> {
        protected __okButton: Beckhoff.TcHmiButton;
        protected __cancelButton: Beckhoff.TcHmiButton;
        protected __backgroundAction: Popup.BackgroundAction<'ok' | 'cancel'>;
        /**
         * Creates a new OkCancelPrompt instance.
         * @param localizations A collection of localization symbol expressions to localize texts in the control.
         * @param parentControl The control which owns the popup.
         */
        constructor(parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Handler for the onPressed event of the OK button.
         */
        protected __onOkPressed: () => void;
        /**
         * Handler for the onPressed event of the cancel button.
         */
        protected __onCancelPressed: () => void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
         * Please check validity in this method and don't rely on the OK buttons isEnabled state, as this method might be called on background click or other events too.
         */
        protected abstract __ok(): void;
        /**
         * Performs the action for the Cancel button.
         */
        protected __cancel(): void;
        /**
         * Sets what happens when the user clicks the background while the popup is showing.
         * @param action The action to perform when the user clicks the background. If the popup should be closed,
         * you can specify ok or cancel to perform the associated action.
         */
        setBackgroundAction(action: Popup.BackgroundAction<'ok' | 'cancel'>): void;
        /**
         * Performs the background action.
         */
        protected __performBackgroundAction(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<OkCancelPrompt.LocalizableTexts>): void;
    }
    module OkCancelPrompt {
        interface LocalizableTexts {
            buttonTextOk: Popup.Localization;
            buttonTooltipOk: Popup.Localization;
            buttonTextCancel: Popup.Localization;
            buttonTooltipCancel: Popup.Localization;
        }
    }
}
declare module TcHmi.Controls.Helpers {
    class InputPrompt extends OkCancelPrompt<string> {
        protected __input: Beckhoff.TcHmiInput;
        protected __forbiddenValues: Set<string>;
        protected __validationPatterns: {
            pattern: RegExp;
            expectedTestResult: boolean;
        }[];
        protected __elementLabel: HTMLElement;
        /**
         * Creates a new InputPrompt instance.
         * @param parentControl The control which owns the popup.
         */
        constructor(parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Handler for the onTextChanged event of the input.
         */
        protected __onTextChanged: () => void;
        /**
         * Handler for the keydown event of the popup element.
         */
        protected __onKeydown: (e: KeyboardEvent) => void;
        /**
         * Checks if the text of the input is valid and sets the isEnabled state of the button and the invalid class of the input accordingly.
         */
        protected __validate(): void;
        /**
         * Validates the given text.
         * @param text The text to validate.
         */
        protected __isValid(text: string): boolean;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         * @param forbiddenValues Values that cannot be entered (i.e. because another item with this name already exists).
         * @param defaultValue The default to fill the input with.
         */
        prompt(forbiddenValues?: Iterable<string> | null, defaultValue?: string): Promise<{
            isOk: true;
            value: string;
        } | {
            isOk: false;
        }>;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        show(): void;
        setValidationPatterns(patterns: {
            pattern: RegExp;
            expectedTestResult: boolean;
        }[]): void;
        getValidationPatterns(): {
            pattern: RegExp;
            expectedTestResult: boolean;
        }[];
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<InputPrompt.LocalizableTexts>): void;
    }
    module InputPrompt {
        interface LocalizableTexts extends OkCancelPrompt.LocalizableTexts {
            labelText: Popup.Localization;
            headerText: Popup.Localization;
        }
    }
}
//# sourceMappingURL=TcHmiPopups.d.ts.map