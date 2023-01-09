declare module TcHmi.Controls.Beckhoff {
    class TcHmiRecipeEdit extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor
         * @param element
         * @param pcElement
         * @param attrs
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: HTMLElement | undefined;
        protected __serverDomain: string | undefined;
        protected __path: string | undefined;
        protected __oldPath: string | undefined;
        protected __unwatchRecipeManagementDomain: DestroyFunction | null;
        protected __unwatchRecipeList: DestroyFunction | null;
        protected __watchRecipeListResult: Server.RecipeManagement.FolderRecipe | null;
        protected __onRecipeListReceivedManager: Helpers.CallbackManager<(rootDirectory: Server.RecipeManagement.FolderRecipe | null) => void>;
        protected __buttons: {
            createFolder: TcHmiButton;
            createRecipe: TcHmiButton;
            rename: TcHmiButton;
            copy: TcHmiButton;
            cut: TcHmiButton;
            paste: TcHmiButton;
            delete: TcHmiButton;
            activate: TcHmiButton;
            teach: TcHmiButton;
            save: TcHmiButton;
            close: TcHmiButton;
        };
        protected __clipboard: {
            action: 'cut' | 'copy';
            origin: string[];
            items: Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>[];
        } | null;
        protected __symbolAccessSubscriptionId: number | null;
        protected __symbolAccess: {
            '{0}.Config': Server.ACCESS;
            Rename: Server.ACCESS;
            '{0}.ActivateRecipe': Server.ACCESS;
            '{0}.ReadFromTarget': Server.ACCESS;
            '{0}.UpdateRecipe': Server.ACCESS;
        };
        protected __recipeBrowser: Helpers.DirectoryBrowser<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe> | undefined;
        protected __recipeEditor: TcHmiRecipeEditComponents.RecipeEditor | undefined;
        protected __namePrompt: Helpers.InputPrompt | null;
        protected __createRecipePrompt: TcHmiRecipeEditComponents.CreateRecipePrompt | null;
        protected __confirmDeletionPrompt: Helpers.TextAndButtonsPrompt<boolean> | null;
        protected __activatePrompt: Helpers.TextAndButtonsPrompt<'saveAndActivate' | 'justActivate' | 'cancel'> | null;
        protected __teachErrorPopup: Helpers.TextAndButtonsPrompt<void> | null;
        protected __confirmClosePrompt: Helpers.TextAndButtonsPrompt<'save' | 'discard' | 'cancel'> | null;
        protected __childControls: TcHmi.Controls.System.baseTcHmiControl[];
        protected __destroyersToCallOnDestroy: DestroyFunction[];
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __destroyLocalizationWatch: DestroyFunction | null;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * Call attribute processor functions here to initialize default values!
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         */
        __init(): void;
        /**
         * Is called by tachcontrol() after the control instance gets part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __attach(): void;
        /**
         * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Handler for the pressed event of the new folder button.
         */
        protected __onNewFolderPressed: () => void;
        /**
         * Handler for the pressed event of the new recipe button.
         */
        protected __onNewRecipePressed: () => void;
        /**
         * Handler for the pressed event of the rename button.
         */
        protected __onRenamePressed: () => void;
        /**
         * Handler for the pressed event of the copy button.
         */
        protected __onCopyPressed: () => void;
        /**
         * Handler for the pressed event of the cut button.
         */
        protected __onCutPressed: () => void;
        /**
         * Handler for the pressed event of the paste button.
         */
        protected __onPastePressed: () => void;
        /**
         * Handler for the pressed event of the delete button.
         */
        protected __onDeletePressed: () => void;
        /**
         * Handler for the selectionChanged event of the recipe browser.
         * @param selectedItem The now selected item.
         * @param path The path of the folder the selected item is in.
         * @param selectedItemName The name of the selected item.
         */
        protected __onSelectionChanged: (selectedItems: Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>[] | null) => void;
        /**
         * Handler for the beforePathChange event of the recipe browser.
         * @param currentItem The new current item.
         * @param path The new path.
         */
        protected __onBeforePathChange: (newCurrentItem: Helpers.DirectoryBrowser.Item<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe> | null, newPath: string[] | null, cancelable: boolean) => Promise<boolean>;
        /**
         * Handler for the pathChanged event of the recipe browser.
         * @param currentItem The new current item.
         * @param path The new path.
         */
        protected __onPathChanged: (currentItem: Helpers.DirectoryBrowser.Item<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe> | null, path: string[] | null) => void;
        /**
         * Handler for the dragAndDrop event of the browsing display of the recipe browser.
         * @param dragged The name of the dragged item.
         * @param droppedOnto Infos about the item the dragged item was dropped onto.
         */
        protected __onDragAndDropped: (dragged: string, droppedOnto: {
            name: string;
            isParent: boolean;
        }) => void;
        /**
         * Handler for the pressed event of the activate button
         */
        protected __onActivatePressed: () => void;
        /**
         * Handler for the pressed event of the teach button
         */
        protected __onTeachPressed: () => void;
        /**
         * Handler for the pressed event of the save button.
         */
        protected __onSavePressed: () => void;
        /**
         * Handler for the pressed event of the close button.
         */
        protected __onClosePressed: () => void;
        /**
         * Handler for the changed event of the recipe editor.
         * @param isValid Whether the recipe editor is now in a valid state.
         * @param value The current value of the recipe editor.
         */
        protected __onRecipeEditorChanged: (editor: TcHmiRecipeEditComponents.RecipeEditor) => void;
        /**
         * Expands the given localization key to a full symbol expression.
         * @param key The key to expand.
         */
        protected __expandLocalizationSymbol(key: string): string;
        /**
         * Forces the buttons operate rights to Deny if the user doesn't have the necessary symbol access.
         */
        protected __updateButtonAccess(): void;
        /**
         * Creates a new InputPrompt and sets the validationPatterns and localizations.
         */
        protected __createNamePrompt(): Helpers.InputPrompt;
        /**
         * Shows a prompt to enter a name and then creates a new folder.
         */
        protected __createFolder(): Promise<void>;
        /**
         * Shows a prompt to enter a name, select a recipe type and then creates a new recipe.
         */
        protected __createRecipe(): Promise<void>;
        /**
         * Shows a prompt to enter a name and then renames the selected item.
         */
        protected __rename(): Promise<void>;
        /**
         * Shows a prompt to confirm and then deletes the selected item.
         */
        protected __delete(): Promise<void>;
        /**
         * Fill the clipboard with the currently selected items.
         * @param action Whether to copy or cut the selected items.
         */
        protected __fillClipboard(action: 'copy' | 'cut'): void;
        /**
         * Pastes the clipboard items into the current location.
         */
        protected __paste(): Promise<void>;
        /**
         * Copy the items to the current folder.
         * @param itemsToPaste The items to copy and paste.
         */
        protected __copyPaste(itemsToPaste: Map<string, Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>>, target: string[]): void;
        /**
         * Move the items to the current folder.
         * @param origin The original folder containing the items.
         * @param itemsToPaste The items to move.
         */
        protected __cutPaste(itemsToPaste: Map<string, Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>>, origin: string[], target: string[]): void;
        /**
         * Shows a popup asking the user how to resolve conflicting file names.
         * @param conflictingNames The names that conflict.
         * @param existingNames The names that already exist in the folder.
         */
        protected __resolveFileNameConflicts(conflictingNames: Iterable<string>, existingNames: Iterable<string>): Promise<{
            isOk: true;
            value: Map<string, string>;
        } | {
            readonly isOk: false;
        }>;
        /**
         * Enables or disables the rename and delete button depending on the selected item.
         * @param selectedItem The currently selected item.
         */
        protected __updateBrowsingButtons(selectedItems: Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>[] | null): void;
        /**
         * Opens or closes the editor depending on the current path.
         * @param currentItem The item the current path points to.
         * @param path The current path.
         */
        protected __openOrCloseEditor(currentItem: Server.RecipeManagement.FolderRecipe | Server.RecipeManagement.Recipe | undefined, path: string[] | null): void;
        /**
         * Checks if the control is in an editing state and if the editor has changes. If so, prompts the user to save or discard changes or cancel the operation.
         * Returns a boolean indicating whether the operation should be canceled or proceeded with.
         */
        protected __checkUnsavedChanges(): Promise<boolean>;
        /**
         * Moves a recipe or folder into another folder.
         * @param dragged The name of the item being moved.
         * @param droppedOnto Infos about the item the dragged item was dropped onto.
         */
        protected __moveItem(dragged: string, droppedOnto: {
            name: string;
            isParent: boolean;
        }): void;
        /**
         * Activates the currently edited recipe.
         */
        protected __activate(): Promise<void>;
        /**
         * Reads the values of the symbols in the currently edited recipe from the PLC and writes them into the recipe.
         */
        protected __teach(): Promise<void>;
        /**
         * Saves the currently edited recipe.
         */
        protected __save(): Promise<void>;
        /**
         * Closes the editor after prompting the user to save changes if there are changes
         */
        protected __closeEditor(): Promise<void>;
        /**
         * Updates the editing buttons according to the state of the editor.
         * @param isValid Whether the editor has valid values.
         */
        protected __updateEditingButtons(isValid: boolean): void;
        /**
         * Sets the current value of attribute ServerDomain.
         * @param valueNew
         */
        setServerDomain(valueNew: string): void;
        /**
         * Returns the current value of attribute ServerDomain.
         */
        getServerDomain(): string | undefined;
        /**
         * Processes the current value of attribute ServerDomain.
         */
        protected __processServerDomain(): void;
        /**
         * Sets the current value of attribute Path.
         * @param valueNew The new value.
         */
        setPath(valueNew: string | null): void;
        /**
         * Returns the current value of attribute Path.
         */
        getPath(): string | undefined;
        /**
         * Processes the current value of attribute Path.
         */
        protected __processPath(): Promise<void>;
        /**
         * Returns the current value of the readonly attribute SelectedItems.
         */
        getSelectedItems(): string[];
        /**
         * Updates the RecipeManagementDomainWatch.
         * @param unwatchOnly Set to true to only destroy the existing watch. Defaults to false.
         */
        protected __updateRecipeWatches(unwatchOnly?: boolean): void;
        /**
         * Callback function for Server.RecipeManagement.watchRecipeList.
         * @param data The recipes.
         */
        protected __onRecipeListWatch: (data: Server.RecipeManagement.IWatchResultObject<Server.RecipeManagement.FolderRecipe>) => void;
        /**
         * Register a callback to receive the current recipe list.
         * @param callback The callback.
         */
        __registerOnRecipeListReceived(callback: (rootDirectory: Server.RecipeManagement.FolderRecipe | null) => void): DestroyFunction;
        /**
         * Unregister a callback to receive the current recipe list.
         * @param callback The callback.
         */
        __unregisterOnRecipeListReceived(callback: (rootDirectory: Server.RecipeManagement.FolderRecipe | null) => void): void;
        /**
         * Update the subscription to GetSymbolAccess.
         * @param unsubscribeOnly Only unsubscribe. Should be used on detach.
         */
        protected __updateSymbolAccessSubscription(unsubscribeOnly?: boolean): void;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    export class RecipeTypeParser {
        private __recipeManagementDomain;
        private __parentControl;
        /**
         * Create a new RecipeTypeParser.
         * @param __recipeManagementDomain The domain of the recipe management extension.
         * @param __parentControl The control owning the recipe type parser.
         */
        constructor(__recipeManagementDomain: string | null, __parentControl: Controls.System.baseTcHmiControl);
        /**
         * Parse a recipe type.
         * @param recipeType The recipe type to parse.
         */
        parse(recipeTypeName: string, recipeType?: Server.RecipeManagement.RecipeType): Promise<ParsedRecipeType>;
        /**
         * Gets the requested recipe types from the server.
         * @param names The names of the recipe types to get.
         */
        protected __getRecipeTypes(names: string[]): Promise<Server.RecipeManagement.RecipeType[]>;
        /**
         * Resolves a recipe types inheritance chain and puts the members of the recipe type into maps according to their group.
         * @param recipeType The recipe type to parse.
         */
        protected __parseRecipeType(recipeTypeName: string, recipeType: Server.RecipeManagement.RecipeType): Promise<ParsedRecipeType>;
        /**
         * Gets the JSON schemas for the given symbols.
         * @param symbols The symbol names to get schemas for.
         */
        protected __getSchemas(symbols: Set<string>): Promise<Map<any, any>>;
    }
    export interface ParsedRecipeType {
        name: string;
        ungroupedMembers: RecipeTypeMember[];
        memberGroups: Map<string, RecipeTypeMember[]>;
        membersEnabled: boolean;
        comment?: string;
    }
    interface RecipeTypeMemberBase {
        name: string;
        comment?: string;
        enabled: boolean;
        group?: string;
        order?: number;
    }
    export interface RecipeTypeMemberSymbol extends RecipeTypeMemberBase {
        /** Name of the symbol of this entry */
        symbol: string;
        /** The type of the symbol */
        symbolType: JsonSchema;
        /** defaultValue for this symbol */
        defaultValue: any;
        /** Schema to restrict the value of the symbol further */
        schema?: JsonSchema;
        /** Engineering unit for this symbol */
        unit?: string;
    }
    export interface RecipeTypeMemberRecipe extends RecipeTypeMemberBase {
        recipeType: string;
    }
    export type RecipeTypeMember = RecipeTypeMemberSymbol | RecipeTypeMemberRecipe;
    export {};
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class SchemaParser {
        private static readonly __restrictions;
        private static readonly __cloneEditorInfoOptions;
        private static readonly __compareEditorInfoOptions;
        /**
         * Parses a JSON schema into editor info objects.
         * @param schema The schema to parse.
         */
        static parse(schema: JsonSchema): BooleanEditor.Info | NumberEditor.Info | StringEditor.Info | TimeEditor.Info | EnumEditor.Info<any> | ObjectEditor.Info | ArrayEditor.Info | TupleEditor.Info | NullEditor.Info | ChoiceEditor.Info;
        /**
         * Resolves allOf members by combining all entries of the allOf into one schema.
         * @param schema The schema to be resolved.
         */
        static resolveAllOf(schema: JsonSchema): JsonSchema;
        /**
         * Recursively resolves references in a schema. Can handle recursive schemas.
         * @param schema The schema to resolve.
         */
        static resolveReferences(schema: JsonSchema): JsonSchema;
        /**
         * Returns the types and, if specified in the schema, their conversions, that are defined in the top level or reachable through anyOf or oneOf paths.
         * @param schema The schema to search for types.
         * @param strayRestrictions Restrictions that were defined further up the anyOf/oneOf chain but could not be applied there.
         */
        private static __findPossibleEditorTypes;
        /**
         * Generates a name for the given type by returning either the types title, a shortened version of the types id, or the capitalized editor type.
         * @param type The type to generate a name for.
         */
        private static __generateName;
        /**
         * Create an editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createEditorInfo;
        /**
         * Create a boolean editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createBooleanEditorInfo;
        /**
         * Create a number editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createNumberEditorInfo;
        /**
         * Create a string editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createStringEditorInfo;
        /**
         * Create a time editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createTimeEditorInfo;
        /**
         * Create an enum editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createEnumEditorInfo;
        /**
         * Create an object editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createObjectEditorInfo;
        /**
         * Create an array editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createArrayEditorInfo;
        /**
         * Create a tuple editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createTupleEditorInfo;
        /**
         * Create a choice editor info from the given types.
         * @param type The types to extract information from.
         * @param schema The original schema.
         */
        private static __createChoiceEditorInfo;
        /**
         * Create a null editor info from the given type.
         * @param type The types to extract information from.
         * @param schema The original schema.
         */
        private static __createNullEditorInfo;
        /**
         * Create an any editor info from the given type.
         * @param type The type to extract information from.
         * @param schema The original schema.
         */
        private static __createAnyEditorInfo;
        /**
         * Merges two or more editor infos together by creating an editor info that only accepts values that satisfy all passed in editor infos.
         * This functions trys to return an editor info of the same type as the first parameter.
         * @param toMerge The editor infos to be merged.
         */
        static mergeEditorInfos(...toMerge: Editor.EditorInfo[]): Editor.EditorInfo;
        /**
         * Merges boolean editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeBooleanEditorInfos;
        /**
         * Merges number editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeNumberEditorInfos;
        /**
         * Merges string editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeStringEditorInfos;
        /**
         * Merges time editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeTimeEditorInfos;
        /**
         * Merges enum editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeEnumEditorInfos;
        /**
         * Merges object editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeObjectEditorInfos;
        /**
         * Merges array editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeArrayEditorInfos;
        /**
         * Merges tuple editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeTupleEditorInfos;
        /**
         * Merges choice editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeChoiceEditorInfos;
        /**
         * Merges optional editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeOptionalEditorInfos;
        /**
         * Merges any editor infos.
         * @param target The target to merge into.
         * @param toMerge The editor infos to merge.
         */
        private static __mergeNullEditorInfos;
        /**
         * Compares two editor infos and determines if they are equivalent.
         * @param a The first editor info to compare.
         * @param b The second editor info to compare.
         */
        static editorInfoEquivalent(a: Editor.EditorInfo, b: Editor.EditorInfo): boolean;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class RecipeEditor {
        #private;
        protected __element: HTMLDivElement;
        protected __parentControl: TcHmiRecipeEdit;
        protected __tableBody: HTMLTableSectionElement;
        protected __recipeManagementDomain: string | null;
        protected __recipe: Server.RecipeManagement.Recipe | null;
        protected __recipeName: string | null;
        protected __recipeTypeName: string | null;
        protected __editors: Map<string, Editor<any> | RecipeReferenceEditor>;
        protected __tableHeaders: {
            name: HTMLTableCellElement;
            value: HTMLTableCellElement;
            min: HTMLTableCellElement;
            max: HTMLTableCellElement;
            unit: HTMLTableCellElement;
            comment: HTMLTableCellElement;
        };
        protected __localizations: Partial<RecipeEditor.LocalizableTexts> | undefined;
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        protected readonly __onChangeManager: Helpers.CallbackManager<(editor: RecipeEditor) => void>;
        readonly onChange: Readonly<{
            add: (callback: (editor: RecipeEditor) => void) => DestroyFunction;
            remove: (callback: (editor: RecipeEditor) => void) => void;
        }>;
        /**
         * Creates a new RecipeEditor.
         * @param __element The element hosting the editor.
         * @param __parentControl The parent control of the editor.
         */
        constructor(__element: HTMLDivElement, __parentControl: TcHmiRecipeEdit);
        /**
         * Destroys the recipe editor.
         */
        destroy(): void;
        /**
         * Populates the editor with members of a recipe type and optionaly values of a given recipe.
         * @param recipeType The recipe type or the name of a recipe type for the recipe that should be edited.
         * @param recipe The recipe to be edited.
         */
        populate(recipeType: {
            name: string;
            recipeType?: Server.RecipeManagement.RecipeType;
        }, recipe: {
            name: string;
            recipe?: Server.RecipeManagement.Recipe;
        }): Promise<void>;
        /**
         * Clears the recipe editor.
         */
        clear(): void;
        /**
         * Removes all elements from the table body.
         */
        protected __clearTableBodyAndEditors(): void;
        /**
         * Creates the table content for the given recipe type and recipe.
         * @param recipeType The type of the recipe to edit.
         * @param recipe The recipe to edit.
         */
        protected __render(recipeType: ParsedRecipeType, recipe?: Server.RecipeManagement.Recipe): void;
        /**
         * Creates a table row for a single recipe type member.
         * @param member The member of the recipe type.
         * @param value The value of the member.
         */
        protected __createMemberRow(member: RecipeTypeMember, value?: any): HTMLTableRowElement;
        /**
         * Handler for the change events of the editors.
         */
        protected __onEditorChanged: () => void;
        /**
         * Returns whether the recipe editor contains valid data.
         */
        isValid(): boolean;
        /**
         * Set the currently edited recipes values to the passed in values.
         * @param value A recipe containing the new values.
         */
        setValue(value: Server.RecipeManagement.Recipe): void;
        /**
         * Returns the currently configured data. Throws errors when the data is invalid. Call isValid beforehand to check for possible errors.
         */
        getState(): RecipeEditor.State;
        /**
         * Returns whether the editor contains data that is different from the initially passed in data.
         */
        hasChanges(): boolean;
        /**
         * Returns the name of the currently edited recipe. Returns null if no recipe is currently being edited.
         */
        getRecipeName(): string | null;
        /**
         * Returns whether the currently edited recipe already exists or is new
         */
        recipeExists(): boolean;
        /**
         * Confirms that the current value has been saved
         */
        confirmSave(): void;
        /**
         * Sets the RecipeManagementDomain. The calling code should verify that the domain is valid and active. If the domain becomes invalid or inactive, this setter should be called with null.
         * @param domain The domain of the recipe management extension on the server.
         */
        setRecipeManagementDomain(domain: string | null): void;
        /**
         * Returns the current RecipeManagementDomain.
         */
        getRecipeManagementDomain(): string | null;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<RecipeEditor.LocalizableTexts>): void;
        /**
         * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
         * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
         * @param localization The localization to watch.
         * @param onChange The callback that is called with the localized and formatted text as a parameter.
         */
        protected __watchLocalization(name: string, localization: Editor.FormattedLocalization, onChange: (localizedText: string) => void): void;
    }
    module RecipeEditor {
        type State = {
            isValid: false;
        } | {
            isValid: true;
            value: Server.RecipeManagement.Recipe;
            recipeName: string;
            recipeTypeName: string;
        };
        interface LocalizableTexts {
            tableHeaderName: Editor.Localization;
            tableHeaderValue: Editor.Localization;
            tableHeaderMin: Editor.Localization;
            tableHeaderMax: Editor.Localization;
            tableHeaderUnit: Editor.Localization;
            tableHeaderComment: Editor.Localization;
            editorLocalizations: Partial<Editor.LocalizableTexts>;
            recipeReferenceEditorLocalizations: Partial<RecipeReferenceEditor.LocalizableTexts>;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class RecipeReferenceEditor {
        #private;
        protected __element: HTMLElement;
        protected __recipeType: string;
        protected __parentControl: TcHmiRecipeEdit;
        protected __eventDestroyers: Set<DestroyFunction>;
        protected __container: HTMLDivElement;
        protected __pathBoxElement: HTMLDivElement;
        protected __button: TcHmiButton;
        protected __selectRecipePrompt: SelectRecipePrompt;
        protected __recipe: {
            name: string;
            recipe: Server.RecipeManagement.Recipe;
        } | null;
        protected __isEnabled: boolean;
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        protected readonly __onChangeManager: Helpers.CallbackManager<(editor: RecipeReferenceEditor) => void>;
        readonly onChange: Readonly<{
            add: (callback: (editor: RecipeReferenceEditor) => void) => DestroyFunction;
            remove: (callback: (editor: RecipeReferenceEditor) => void) => void;
        }>;
        /**
         * Creates a new RecipeReferenceEditor.
         * @param __element The element hosting the editor.
         * @param __parentControl The parent control of the editor.
         */
        constructor(__element: HTMLElement, __recipeType: string, __parentControl: TcHmiRecipeEdit);
        /**
         * Destroys the editor and all its controls.
         */
        destroy(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: string | null): Promise<void>;
        /**
         * Gets the current value.
         */
        getState(): RecipeReferenceEditor.State;
        /**
         * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
         * @param isEnabled Whether the editor should be enabled or disabled.
         */
        setIsEnabled(isEnabled: boolean): void;
        /**
         * Get whether the editor is enabled or disabled.
         */
        getIsEnabled(): boolean;
        /**
         * Event handler for the onPressed event of the button.
         */
        protected __onPressed: () => void;
        /**
         * Handler for the click event of path items.
         * @param event
         */
        protected __onPathItemClicked: (event: MouseEvent) => void;
        /**
         * Prompts the user for a recipe type.
         */
        protected __promptRecipe(): Promise<void>;
        /**
         * Sets the internal recipe variable, toggles the invalid class and triggers change handlers.
         * @param recipe The new recipe.
         */
        protected __setRecipe(recipe: {
            name: string;
            recipe: Server.RecipeManagement.Recipe;
        } | null): void;
        /**
         * Callback for received recipe lists.
         * @param rootDirectory The recipe list.
         */
        protected __onRecipeListReceived: (rootDirectory: Server.RecipeManagement.FolderRecipe | null) => void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<RecipeReferenceEditor.LocalizableTexts>): void;
        /**
         * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
         * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
         * @param localization The localization to watch.
         * @param onChange The callback that is called with the localized and formatted text as a parameter.
         */
        protected __watchLocalization(name: string, localization: Editor.FormattedLocalization, onChange: (localizedText: string) => void): void;
        /**
         * Destroys the localization watch with the given name, if it exists.
         * @param name The name that was used with __watchLoclalization to start watching the symbol.
         */
        protected __unwatchLocalization(name: string): void;
    }
    module RecipeReferenceEditor {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            openPopupButtonTooltip: Editor.Localization;
            recipePopupHeaderText: Helpers.Popup.Localization;
        }
        type State = {
            isValid: false;
        } | {
            isValid: true;
            value: string;
        };
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class CreateRecipePrompt extends Helpers.OkCancelPrompt<{
        name: string;
        recipeTypeName: string;
        recipeType: Server.RecipeManagement.RecipeType;
    }> {
        protected __textbox: TcHmiTextbox;
        protected __forbiddenNames: Set<string>;
        protected __nameLabel: HTMLSpanElement;
        protected __recipeTypeLabel: HTMLSpanElement;
        protected __pathBoxElement: HTMLDivElement;
        protected __selectRecipeTypePrompt: SelectRecipeTypePrompt;
        protected __selectButton: TcHmiButton;
        protected __recipeType: {
            name: string;
            recipeType: Server.RecipeManagement.RecipeType;
        } | null;
        /**
         * Creates a new CreateRecipePrompt instance.
         * @param parentControl The control which owns the popup.
         */
        constructor(parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Handler for the onTextChanged event of the textbox.
         */
        protected __onTextChanged: () => void;
        /**
         * Handler for the onPressed event of the select button.
         */
        protected __onSelectPressed: () => void;
        /**
         * Handler for the click event of path items.
         * @param event
         */
        protected __onPathItemClicked: (event: MouseEvent) => void;
        /**
         * Validates the given text as a name. A valid name must not be empty and not contain '::'.
         * @param text The text to validate.
         */
        protected __isValidName(text: string): boolean;
        /**
         * Prompts the user for a recipe type.
         */
        protected __promptRecipeType(): Promise<void>;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Sets the recipeManagementDomain. The recipeManagementDomain must be set to be able to browse recipe types.
         * @param recipeManagementDomain The server domain that is used for recipe management.
         */
        setRecipeManagementDomain(recipeManagementDomain: string | null): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         * @param forbiddenNames Names that cannot be entered (i.e. because another item with this name already exists).
         */
        prompt(forbiddenNames?: Iterable<string> | null, defaultValue?: string): Promise<{
            isOk: true;
            value: {
                name: string;
                recipeTypeName: string;
                recipeType: Server.RecipeManagement.RecipeType;
            };
        } | {
            isOk: false;
        }>;
        /**
         * Shows the popup.
         */
        show(): void;
        /**
         * Hides the popup.
         */
        hide(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<CreateRecipePrompt.LocalizableTexts>): void;
    }
    module CreateRecipePrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            headerText: Helpers.Popup.Localization;
            nameLabelText: Helpers.Popup.Localization;
            recipeTypeLabelText: Helpers.Popup.Localization;
            selectButtonTooltip: Helpers.Popup.Localization;
            recipeTypePopupHeaderText: Helpers.Popup.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class SelectRecipePrompt extends Helpers.OkCancelPrompt<{
        name: string;
        recipe: Server.RecipeManagement.Recipe;
    }> {
        #private;
        protected __recipeBrowser: Helpers.DirectoryBrowser<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>;
        protected __initialPath: string[] | null;
        /**
         * Creates a new SelectRecipePrompt instance.
         * @param pathDisplay The display to show the currently chosen path in.
         * @param parentControl The control which owns the popup.
         */
        constructor(pathDisplay: Helpers.PathDisplay, parentControl: TcHmiRecipeEdit);
        /**
         * Handler for the PathChanged event of the recipe type browser.
         * @param currentItem The current item.
         * @param path The path to the current item.
         */
        protected __onPathChanged: (currentItem: Helpers.DirectoryBrowser.Item<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe> | null, path: string[] | null) => void;
        /**
         * Handler for the SelectionChanged event of the recipe type browser.
         * @param selectedItem The selected item, or null if nothing is selected.
         * @param path The current path.
         * @param selectedItemName The name of the selected item, or null if nothing is selected.
         */
        protected __onSelectionChanged: (selectedItems: Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>[] | null) => void;
        /**
         * Suspends the RecipeBrowser of this popup.
         */
        suspend(): void;
        /**
         * Resumes the RecipeBrowser of this popoup.
         */
        resume(): void;
        /**
         * Sets the path of the RecipeBrowser to the specified value.
         * @param value The path.
         */
        setPath(value: string[]): Promise<{
            name: string;
            recipe: Server.RecipeManagement.Recipe;
        } | null>;
        /**
         * Sets the path of the RecipeBrowser to the root directory.
         */
        reset(): void;
        /**
         * Callback function for Server.RecipeManagement.watchRecipeList.
         * @param data The recipes.
         */
        setRecipeList(rootDirectory: Server.RecipeManagement.FolderRecipe | null): void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
         */
        protected __ok(): Promise<void>;
        /**
         * Performs the action for the Cancel button.
         */
        protected __cancel(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        prompt(): Promise<{
            isOk: true;
            value: {
                name: string;
                recipe: Server.RecipeManagement.Recipe;
            };
        } | {
            isOk: false;
        }>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<SelectRecipePrompt.LocalizableTexts>): void;
    }
    module SelectRecipePrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            headerText: Helpers.Popup.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class SelectRecipeTypePrompt extends Helpers.OkCancelPrompt<{
        name: string;
        recipeType: Server.RecipeManagement.RecipeType;
    }> {
        #private;
        protected __recipeTypeBrowser: Helpers.DirectoryBrowser<Server.RecipeManagement.RecipeType, Server.RecipeManagement.FolderRecipeType>;
        protected __initialPath: string[] | null;
        protected __recipeManagementDomain: string | null;
        protected __unwatchRecipeList: DestroyFunction | null;
        /**
         * Creates a new SelectRecipeTypePrompt instance.
         * @param pathDisplay The display to show the currently chosen path in.
         * @param parentControl The control which owns the popup.
         */
        constructor(pathDisplay: Helpers.PathDisplay, parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Handler for the PathChanged event of the recipe type browser.
         * @param currentItem The current item.
         * @param path The path to the current item.
         */
        protected __onPathChanged: (currentItem: Helpers.DirectoryBrowser.Item<Server.RecipeManagement.RecipeType, Server.RecipeManagement.FolderRecipeType> | null, path: string[] | null) => void;
        /**
         * Handler for the SelectionChanged event of the recipe type browser.
         * @param selectedItem The selected item, or null if nothing is selected.
         * @param path The current path.
         * @param selectedItemName The name of the selected item, or null if nothing is selected.
         */
        protected __onSelectionChanged: (selectedItems: Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.RecipeType, Server.RecipeManagement.FolderRecipeType>[] | null) => void;
        /**
         * Suspends the RecipeTypeBrowser of this popup.
         */
        suspend(): void;
        /**
         * Resumes the RecipeTypeBrowser of this popoup.
         */
        resume(): void;
        /**
         * Sets the path of the RecipeTypeBrowser to the root directory.
         */
        reset(): void;
        /**
         * Sets the recipeManagementDomain. The recipeManagementDomain must be set to be able to browse recipe types.
         * @param recipeManagementDomain The server domain that is used for recipe management.
         */
        setRecipeManagementDomain(recipeManagementDomain: string | null): void;
        /**
         * Callback function for Server.RecipeManagement.watchRecipeList.
         * @param data The recipes.
         */
        protected __onRecipeTypeListWatch: (data: Server.RecipeManagement.IWatchResultObject<Server.RecipeManagement.FolderRecipeType>) => void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
         */
        protected __ok(): Promise<void>;
        /**
         * Performs the action for the Cancel button.
         */
        protected __cancel(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        prompt(): Promise<{
            isOk: true;
            value: {
                name: string;
                recipeType: Server.RecipeManagement.RecipeType;
            };
        } | {
            isOk: false;
        }>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<SelectRecipeTypePrompt.LocalizableTexts>): void;
    }
    module SelectRecipeTypePrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            headerText: Helpers.Popup.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class FileConflictPrompt extends Helpers.OkCancelPrompt<Map<string, string>> {
        protected __existingNames: Set<string>;
        protected __elementLabel: HTMLElement;
        protected __rows: Map<string, {
            skip: TcHmiRadioButton;
            replace: TcHmiRadioButton;
            both: TcHmiRadioButton;
        }>;
        protected __doAll: {
            label: HTMLElement;
            controls: {
                skip: TcHmiRadioButton;
                replace: TcHmiRadioButton;
                both: TcHmiRadioButton;
            };
        } | undefined;
        /**
         * Creates a new FileConflictPrompt instance.
         * @param conflictingNames A map of the names that produce conflicts and whether the original file is replaceable (i. e. not read only).
         * @param parentControl The control which owns the popup.
         */
        constructor(conflictingNames: Map<string, boolean>, existingNames: Iterable<string>, parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Creates a container element with a label and three radio buttons.
         * @param labelText The text that is displayed in the label.
         * @param replaceable Whether to enable or disable the 'Replace' radio button.
         * @param eventHandler The event handler for the radioStateChanged event of the radio buttons.
         */
        protected __buildRow(labelText: string, replaceable?: boolean, eventHandler?: () => void): {
            container: HTMLDivElement;
            label: HTMLSpanElement;
            controls: {
                skip: TcHmiRadioButton;
                replace: TcHmiRadioButton;
                both: TcHmiRadioButton;
            };
        };
        /**
         * Event handler for the radioStateChanged event of the radio buttons
         */
        protected __onRadioStateChanged: () => void;
        /**
         * Create an event handler for radioStateChanged event of an all
         * @param name
         */
        protected __getOnAllRadioStateChangedHandler(name: 'skip' | 'replace' | 'both'): () => void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<FileConflictPrompt.LocalizableTexts>): void;
    }
    module FileConflictPrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            headerText: Helpers.Popup.Localization;
            labelText: Helpers.Popup.Localization;
            radioTextSkip: Helpers.Popup.Localization;
            radioTextReplace: Helpers.Popup.Localization;
            radioTextKeepBoth: Helpers.Popup.Localization;
            labelDoForAll: Helpers.Popup.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class ObjectEditorPrompt extends Helpers.OkCancelPrompt<object> {
        protected __editorPane: ObjectEditorPane;
        /**
         * Creates a new ObjectEditorPrompt instance.
         * @param editorInfo Information about the object editor.
         * @param parentControl The control which owns the popup.
         */
        constructor(editorInfo: ObjectEditor.Info, parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo
         */
        setEditorInfo(editorInfo: ObjectEditor.Info): void;
        /**
         * Set a new Value. Returns whether the given value is valid.
         * @param value The value to set.
         */
        setValue(value: object | null): void;
        /**
         * Handler for the change event of the editor pane.
         * @param state The state of the editor pane.
         */
        protected __onEditorChanged: (editor: ObjectEditorPane) => void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<ObjectEditorPrompt.LocalizableTexts>): void;
    }
    module ObjectEditorPrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            editorLocalizations: Partial<Editor.LocalizableTexts>;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class ArrayEditorPrompt extends Helpers.OkCancelPrompt<any[]> {
        protected __editorPane: ArrayEditorPane;
        /**
         * Creates a new ArrayEditorPrompt instance.
         * @param editorInfo Information about the array editor.
         * @param parentControl The control which owns the popup.
         */
        constructor(editorInfo: ArrayEditor.Info, parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo
         */
        setEditorInfo(editorInfo: ArrayEditor.Info): void;
        /**
         * Set a new Value. Returns whether the given value is valid.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Handler for the change event of the editor pane.
         * @param state The state of the editor pane.
         */
        protected __onEditorChanged: (editor: ArrayEditorPane) => void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<ArrayEditorPrompt.LocalizableTexts>): void;
    }
    module ArrayEditorPrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            editorLocalizations: Partial<Editor.LocalizableTexts>;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class TupleEditorPrompt extends Helpers.OkCancelPrompt<any[]> {
        protected __editorPane: TupleEditorPane;
        /**
         * Creates a new TupleEditorPrompt instance.
         * @param editorInfo Information about the array editor.
         * @param parentControl The control which owns the popup.
         */
        constructor(editorInfo: TupleEditor.Info, parentControl: TcHmi.Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo
         */
        setEditorInfo(editorInfo: TupleEditor.Info): void;
        /**
         * Set a new Value. Returns whether the given value is valid.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Handler for the change event of the editor pane.
         * @param state The state of the editor pane.
         */
        protected __onEditorChanged: (editor: TupleEditorPane) => void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<TupleEditorPrompt.LocalizableTexts>): void;
    }
    module TupleEditorPrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            editorLocalizations: Partial<Editor.LocalizableTexts>;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    abstract class Editor<T, I extends Editor.EditorInfo = Editor.EditorInfo> {
        #private;
        protected __element: HTMLElement;
        protected __editorInfo: I;
        protected __parentControl: Controls.System.baseTcHmiControl;
        protected __name: string;
        protected __childControls: Set<System.baseTcHmiControl>;
        protected __eventDestroyers: Set<DestroyFunction>;
        protected __isEnabled: boolean;
        protected __localizations: Partial<Editor.LocalizableTexts> | undefined;
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        protected readonly __onChangeManager: Helpers.CallbackManager<(editor: Editor<T, I>) => void>;
        readonly onChange: Readonly<{
            add: (callback: (editor: Editor<T, I>) => void) => DestroyFunction;
            remove: (callback: (editor: Editor<T, I>) => void) => void;
        }>;
        /**
         * Create a new editor.
         * @param __element The element to contain the editor.
         * @param __editorInfo An object containing information about the editor and the type of value to edit.
         * @param __parentControl The control owning the editor.
         */
        constructor(__element: HTMLElement, __editorInfo: I, __parentControl: Controls.System.baseTcHmiControl);
        /**
         * Create a new editor for the given editor info.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         * @param localizations A collection of localization symbols to display texts in the editor.
         */
        static create(element: HTMLElement, editorInfo: Editor.EditorInfo, parentControl: Controls.System.baseTcHmiControl, localizations?: Partial<Editor.LocalizableTexts>): Editor<any, Editor.EditorInfo>;
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo
         */
        setEditorInfo(editorInfo: I): void;
        /**
         * Gets the editor info.
         */
        getEditorInfo(): I;
        /**
         * Processes the current editor info.
         */
        protected abstract __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        abstract setValue(value: T | null): void;
        /**
         * Gets the current value.
         */
        getState(): Editor.State<T>;
        /**
         * Gets the current raw value of the editor. This value might be invalid. To get the final actual value, always use getState.
         */
        abstract getRawValue(): T;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: Editor.EditorInfo, value: any): boolean;
        /**
         * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
         * @param isEnabled Whether the editor should be enabled or disabled.
         */
        setIsEnabled(isEnabled: boolean): void;
        /**
         * Get whether the editor is enabled or disabled.
         */
        getIsEnabled(): boolean;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
        /**
         * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
         * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
         * @param localization The localization to watch.
         * @param onChange The callback that is called with the localized and formatted text as a parameter.
         */
        protected __watchLocalization(name: string, localization: Editor.FormattedLocalization, onChange: (localizedText: string) => void): void;
        /**
         * Destroys the localization watch with the given name, if it exists.
         * @param name The name that was used with __watchLoclalization to start watching the symbol.
         */
        protected __unwatchLocalization(name: string): void;
    }
    module Editor {
        interface Info {
            type: EditorType;
            schema: JsonSchema;
            name: string;
        }
        type EditorType = 'boolean' | 'number' | 'string' | 'time' | 'enum' | 'object' | 'array' | 'tuple' | 'optional' | 'choice' | 'null' | 'invalid';
        type EditorInfo = BooleanEditor.Info | NumberEditor.Info | StringEditor.Info | TimeEditor.Info | EnumEditor.Info | ObjectEditor.Info | ArrayEditor.Info | TupleEditor.Info | OptionalEditor.Info | ChoiceEditor.Info | NullEditor.Info | InvalidEditor.Info;
        type State<T> = {
            isValid: false;
        } | {
            isValid: true;
            value: T;
        };
        type Localization = string | FormattedLocalization;
        interface FormattedLocalization {
            symbol: string;
            formatValues: any[];
        }
        interface LocalizableTexts {
            optionalEditor: Partial<OptionalEditor.LocalizableTexts>;
            buttonBasedEditor: Partial<ButtonBasedEditor.LocalizableTexts>;
            booleanEditor: Partial<BooleanEditor.LocalizableTexts>;
            timeEditor: Partial<TimeEditor.LocalizableTexts>;
            choiceEditor: Partial<ChoiceEditor.LocalizableTexts>;
            arrayBasedEditorPane: Partial<ArrayBasedEditorPane.LocalizableTexts>;
            objectEditorPane: Partial<ObjectEditorPane.LocalizableTexts>;
            arrayEditorPrompt: Partial<Omit<ArrayEditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
            objectEditorPrompt: Partial<Omit<ObjectEditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
            tupleEditorPrompt: Partial<Omit<TupleEditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    abstract class TextboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
        protected __textbox: TcHmiTextbox;
        /**
         * Create a new textbox based editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: I, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Event handler for the onTextChanged event of the textbox.
         */
        protected __onTextChanged: () => void;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class NumberEditor extends TextboxBasedEditor<number | string, NumberEditor.Info> {
        /**
         * Create a new number editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         * @param __restrictions Further restrictions for valid numbers.
         */
        constructor(element: HTMLElement, editorInfo: NumberEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: NumberEditor.Info, value: any): value is number | string;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Tests whether the supplied number fits into the given minimum.
         * @param value The number to test.
         * @param minimum The minimum to test against.
         */
        protected static __testMinimum(value: number, minimum: {
            value: number;
            exclusive: boolean;
        }): boolean;
        /**
         * Tests whether the supplied number fits into the given maximum.
         * @param value The number to test.
         * @param maximum The maximum to test against.
         */
        protected static __testMaximum(value: number, maximum: {
            value: number;
            exclusive: boolean;
        }): boolean;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: number | string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string | number;
    }
    module NumberEditor {
        interface Info extends Editor.Info {
            type: 'number';
            restrictions: Restriction[];
            specialValues: Set<string>;
        }
        interface Restriction {
            isInteger: boolean;
            multipleOf?: number;
            maximum?: {
                value: number;
                exclusive: boolean;
            };
            minimum?: {
                value: number;
                exclusive: boolean;
            };
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class StringEditor extends TextboxBasedEditor<string, StringEditor.Info> {
        /**
         * Create a new string editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: StringEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: StringEditor.Info, value: any): value is string;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string;
    }
    module StringEditor {
        interface Info extends Editor.Info {
            type: 'string';
            restrictions: Restriction[];
        }
        interface Restriction {
            minLength?: number;
            maxLength?: number;
            patterns?: RegExp[];
            format?: JsonSchema['format'];
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class TimeEditor extends TextboxBasedEditor<string, TimeEditor.Info> {
        protected __container: HTMLDivElement;
        protected __dateTimePicker: TcHmiDateTimePicker | undefined;
        protected __dateTimeButton: TcHmiButton | undefined;
        protected __timespanPicker: TcHmiTimespanPicker | undefined;
        protected __timespanButton: TcHmiButton | undefined;
        /**
         * Create a new string editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: TimeEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: TimeEditor.Info, value: any): value is string;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string;
        /**
         * Creates a DateTimePicker and a Button to open it.
         */
        protected __createDateTimeControls(): void;
        /**
         * Creates a TimespanPicker and a Button to open it.
         */
        protected __createTimespanControls(): void;
        /**
         * Event handler for the value changed event of the datetime picker.
         */
        protected __onDateTimeChanged: () => void;
        /**
         * Event handler for the pressed event of the datetime button.
         */
        protected __onDateTimeButtonPressed: () => void;
        /**
         * Event handler for the value changed event of the timespan picker.
         */
        protected __onTimespanChanged: () => void;
        /**
         * Event handler for the pressed event of the timespan button.
         */
        protected __onTimespanButtonPressed: () => void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
        /**
         * Localizes the dateTimeButton
         */
        protected __localizeDateTimeButton(): void;
        /**
         * Localizes the timespanButton
         */
        protected __localizeTimespanButton(): void;
    }
    module TimeEditor {
        interface Info extends Editor.Info {
            type: 'time';
            formats: Set<'date-time' | 'timespan'>;
        }
        interface LocalizableTexts {
            dateTimeButtonTooltip: Editor.Localization;
            timespanButtonTooltip: Editor.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    abstract class ComboboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
        protected __combobox: TcHmiCombobox;
        /**
         * Create a new combobox based editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: I, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Event handler for the onSelectionChanged event of the combobox.
         */
        protected __onSelectionChanged: () => void;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class EnumEditor<T> extends ComboboxBasedEditor<T, EnumEditor.Info<T>> {
        /**
         * Create a new enum editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: EnumEditor.Info<T>, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Returns whether the editor contains a valid value for the schema.
         */
        static validate<T = any>(editorInfo: EnumEditor.Info, value: any): value is T;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: T | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any;
    }
    module EnumEditor {
        interface Info<T = any> extends Editor.Info {
            type: 'enum';
            members: Map<T, string | undefined>;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class BooleanEditor extends ComboboxBasedEditor<boolean, BooleanEditor.Info> {
        protected __comboboxTexts: {
            false: string;
            true: string;
        };
        /**
         * Create a new boolean editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: BooleanEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: BooleanEditor.Info, value: any): value is boolean;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: boolean | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any;
        /**
         * Updates the combobox srcData with current texts.
         */
        protected __updateSrcData(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module BooleanEditor {
        interface Info extends Editor.Info {
            type: 'boolean';
        }
        interface LocalizableTexts {
            falseText: Editor.Localization;
            trueText: Editor.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    abstract class ButtonBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
        protected __container: HTMLDivElement;
        protected __textSpan: HTMLSpanElement;
        protected __button: TcHmiButton;
        /**
         * Create a new button based editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: I, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Event handler for the onPressed event of the button.
         */
        protected __onPressed: () => void;
        /**
         * Opens the popup for the editor.
         */
        protected abstract openPopup(): Promise<void>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module ButtonBasedEditor {
        interface LocalizableTexts {
            buttonTooltip: Editor.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class ObjectEditor extends ButtonBasedEditor<object, ObjectEditor.Info> {
        protected __value: object;
        protected __popup: ObjectEditorPrompt | undefined;
        /**
         * Create a new object editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: ObjectEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: ObjectEditor.Info, value: any): value is object;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Resolves dependencies of an object editor info by merging the dependecies with names contained in knownProperties into the editorInfo. Returns the original editorInfo if no dependecies are matched.
         * @param editorInfo The editor info to resolve.
         * @param knownProperties The properties that are known to exist on the object value.
         */
        static resolveDependencies(editorInfo: ObjectEditor.Info, knownProperties: Set<string>): ObjectEditor.Info | InvalidEditor.Info;
        /**
         * Determines which editor info to use for the given property.
         * @param editorInfo The object editor info containing infos about the given property.
         * @param property The name of the property.
         */
        static getEditorInfoForProperty(editorInfo: ObjectEditor.Info, property: string): Editor.EditorInfo;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: object | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): object;
        /**
         * Opens the popup for the editor.
         */
        protected openPopup(): Promise<void>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module ObjectEditor {
        interface Info extends Editor.Info {
            type: 'object';
            properties: Map<string, Editor.EditorInfo>;
            patternProperties?: Map<RegExp, Editor.EditorInfo>;
            additionalProperties: {
                allowed: boolean;
                editorInfo?: Editor.EditorInfo;
            };
            maxProperties?: number;
            minProperties?: number;
            dependencies?: Map<string, ObjectEditor.Info>;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class ObjectEditorPane extends Editor<object, ObjectEditor.Info> {
        protected __editorTable: HTMLTableElement;
        protected __newPropertyContainer: HTMLDivElement;
        protected __newPropertyTextbox: TcHmiTextbox;
        protected __acceptNewPropertyButton: TcHmiButton;
        protected __cancelNewPropertyButton: TcHmiButton;
        protected __addPropertyButton: TcHmiButton;
        protected __removeButtonTooltip: string;
        protected __editors: Map<string, ObjectEditorPane.EditorEntry>;
        protected __dependencyOverride: ObjectEditor.Info;
        protected __pauseChangeHandlers: boolean;
        /**
         * Create a new object editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: ObjectEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: object | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): object;
        /**
         * Determines which dependencies should be applied and changes the editors accordingly.
         */
        protected __applyDependencies(): void;
        /**
         * Creates a table row for the given editor info.
         * @param name The name of the property the row should edit.
         * @param editorInfo Info about the editor in the row.
         * @param isAdditional Whether the row describes an additional property that can be removed.
         */
        protected __createEditorRow(name: string, editorInfo: Editor.EditorInfo, isAdditional: boolean): ObjectEditorPane.EditorEntry;
        /**
         * Handler for the change events of the editors.
         */
        protected __onEditorChanged: (editor: Editor<any>) => void;
        /**
         * Creates a handler callback for the pressed event of a remove button.
         * @param name The name of the row to remove.
         */
        protected __getRemoveButtonPressedHandler(name: string): () => void;
        /**
         * Remove a row.
         * @param name The name of the row to remove.
         */
        protected __removeEditorRow(name: string): void;
        /**
         * Handler for the pressed event of the add property button.
         */
        protected __onAddPropertyPressed: () => void;
        /**
         * Handler for the text changed event of the new property textbox.
         */
        protected __onNewPropertyTextChanged: () => void;
        /**
         * Handler for the pressed event of the accept new property button.
         */
        protected __onAcceptNewPropertyPressed: () => void;
        /**
         * Handler for the pressed event of the cancel new property button.
         */
        protected __onCancelNewPropertyPressed: () => void;
        /**
         * Clear the new property textbox, hide the new property container and show the add property button.
         */
        protected __cancelNewProperty(): void;
        /**
         * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
         * @param isEnabled Whether the editor should be enabled or disabled.
         */
        setIsEnabled(isEnabled: boolean): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module ObjectEditorPane {
        interface EditorEntry {
            editor: Editor<any>;
            row: HTMLTableRowElement;
            cell: HTMLTableCellElement;
            removeButton?: TcHmiButton;
            additionalDestroyer?: DestroyFunction;
        }
        interface LocalizableTexts {
            addButtonTooltip: Editor.Localization;
            acceptButtonText: Editor.Localization;
            acceptButtonTooltip: Editor.Localization;
            cancelButtonTooltip: Editor.Localization;
            removeButtonTooltip: Editor.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class OptionalEditor<T> extends Editor<T | undefined, OptionalEditor.Info> {
        protected __container: HTMLDivElement;
        protected __editor: Editor<T>;
        protected __checkbox: TcHmiCheckbox;
        /**
         * Create a new optional editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: OptionalEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo
         */
        setEditorInfo(editorInfo: OptionalEditor.Info): void;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Handler for the toggleStateChanged event of the checkbox
         */
        protected __onToggleStateChanged: () => void;
        /**
         * Handler for the change event of the editor
         */
        protected __onEditorChanged: () => void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate<T = any>(editorInfo: OptionalEditor.Info, value: any): value is T;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: T | null | undefined): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): T | undefined;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module OptionalEditor {
        interface Info extends Editor.Info {
            type: 'optional';
            editorInfo: Exclude<Editor.EditorInfo, OptionalEditor.Info>;
            temporarilyRequired: boolean;
        }
        interface LocalizableTexts {
            optionalCheckboxTooltip: Editor.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class ArrayEditor extends ButtonBasedEditor<any[], ArrayEditor.Info> {
        protected __value: any[];
        protected __popup: ArrayEditorPrompt | undefined;
        /**
         * Create a new array editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: ArrayEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: ArrayEditor.Info, value: any): value is any[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any[];
        /**
         * Opens the popup for the editor.
         */
        protected openPopup(): Promise<void>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module ArrayEditor {
        interface Info extends Editor.Info {
            type: 'array';
            items: Editor.EditorInfo;
            minItems?: number;
            maxItems?: number;
            uniqueItems: boolean;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    abstract class ArrayBasedEditorPane<I extends ArrayEditor.Info | TupleEditor.Info> extends Editor<any[], I> {
        protected __editorTable: HTMLTableElement;
        protected __addItemButton: TcHmiButton;
        protected __upButton: TcHmiButton;
        protected __downButton: TcHmiButton;
        protected __removeButtonTooltip: string;
        protected __editors: ArrayBasedEditorPane.EditorEntry[];
        protected __selectedEditorEntry: ArrayBasedEditorPane.EditorEntry | null;
        protected __pauseChangeHandlers: boolean;
        /**
         * Create a new array based editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: I, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any[];
        /**
         * Creates a table row for the given editor info.
         * @param editorInfo Info about the editor in the row.
         */
        protected __createEditorRow(editorInfo: Editor.EditorInfo, removable?: boolean): ArrayBasedEditorPane.EditorEntry;
        /**
         * Handler for the change events of the editors.
         * @param editor The editor that was changed.
         */
        protected __onEditorChanged: (editor: Editor<any>) => void;
        /**
         * Handles the change events of the editors.
         * @param editor The editor that was changed.
         */
        protected __handleOnEditorChanged(editor: Editor<any>): void;
        /**
         * Creates a handler callback for the pressed event of a remove button.
         * @param editorEntry The entry describing the row to remove.
         */
        protected __getRemoveButtonPressedHandler(entry: ArrayBasedEditorPane.EditorEntry): () => void;
        /**
         * Remove a row.
         * @param editorEntry The entry describing the row to remove.
         */
        protected __removeEditorRow(editorEntry: ArrayBasedEditorPane.EditorEntry): void;
        /**
         * Mark the row element of the given editor entry as selected and set this.__selectedEditorEntry.
         * @param editorEntry The editor entry to select. Pass null to reset the selection.
         */
        protected __selectItem(editorEntry: ArrayBasedEditorPane.EditorEntry | null): void;
        /**
         * Disables or enables the up and down buttons depending on the index of the selected item.
         * @param selectedIndex The index of the selected item.
         */
        protected __updateMoveButtons(selectedIndex: number): void;
        /**
         * Handler for the click event of the editor element.
         * @param e The event object.
         */
        protected __onClick: (e: MouseEvent) => void;
        /**
         * Handler for the pressed event of the add item button.
         */
        protected __onAddItemPressed: () => void;
        /**
         * Adds a new table row with an editor for a new item
         */
        protected abstract __addItem(): void;
        /**
         * Handler for the pressed event of the up button.
         */
        protected __onUpPressed: () => void;
        /**
         * Handler for the pressed event of the down button.
         */
        protected __onDownPressed: () => void;
        /**
         * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
         * @param isEnabled Whether the editor should be enabled or disabled.
         */
        setIsEnabled(isEnabled: boolean): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module ArrayBasedEditorPane {
        interface EditorEntry {
            editor: Editor<any>;
            row: HTMLTableRowElement;
            cell: HTMLTableCellElement;
            removeButton?: TcHmiButton;
            removeDestroyer?: DestroyFunction;
        }
        interface LocalizableTexts {
            addButtonTooltip: Editor.Localization;
            upButtonTooltip: Editor.Localization;
            downButtonTooltip: Editor.Localization;
            removeButtonTooltip: Editor.Localization;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class ArrayEditorPane extends ArrayBasedEditorPane<ArrayEditor.Info> {
        /**
         * Create a new array editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: ArrayEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Adds a new table row with an editor for a new item
         */
        protected __addItem(): void;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class TupleEditor extends ButtonBasedEditor<any[], TupleEditor.Info> {
        protected __value: any[];
        protected __popup: TupleEditorPrompt | undefined;
        /**
         * Create a new array editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: TupleEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: TupleEditor.Info, value: any): value is any[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any[];
        /**
         * Opens the popup for the editor.
         */
        protected openPopup(): Promise<void>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module TupleEditor {
        interface Info extends Editor.Info {
            type: 'tuple';
            items: Editor.EditorInfo[];
            additionalItems: {
                allowed: boolean;
                editorInfo?: Editor.EditorInfo;
            };
            minItems?: number;
            maxItems?: number;
            uniqueItems: boolean;
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class TupleEditorPane extends ArrayBasedEditorPane<TupleEditor.Info> {
        /**
         * Create a new tuple editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: TupleEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Marks optional editors as temporarily required.
         */
        protected __markRequired(): void;
        /**
         * Handles the change events of the editors.
         * @param editor The editor that was changed.
         */
        protected __handleOnEditorChanged(editor: Editor<any>): void;
        /**
         * Adds a new table row with an editor for a new item
         */
        protected __addItem(): void;
        /**
         * Remove a row.
         * @param editorEntry The entry describing the row to remove.
         */
        protected __removeEditorRow(editorEntry: ArrayBasedEditorPane.EditorEntry): void;
        /**
         * Disables or enables the up and down buttons depending on the index of the selected item.
         * @param selectedIndex The index of the selected item.
         */
        protected __updateMoveButtons(selectedIndex: number): void;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class NullEditor extends Editor<null, NullEditor.Info> {
        /**
         * Create a new null editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: NullEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: NullEditor.Info, value: any): value is null;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): null;
    }
    module NullEditor {
        interface Info extends Editor.Info {
            type: 'null';
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class InvalidEditor extends Editor<any, InvalidEditor.Info> {
        protected __value: any;
        protected __textContainer: HTMLElement;
        /**
         * Create a new invalid editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: InvalidEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: InvalidEditor.Info, value: any): value is any;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any;
    }
    module InvalidEditor {
        interface Info extends Editor.Info {
            type: 'invalid';
        }
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiRecipeEditComponents {
    class ChoiceEditor extends Editor<any, ChoiceEditor.Info> {
        protected __value: any;
        protected __container: HTMLDivElement;
        protected __combobox: TcHmiCombobox;
        protected __editors: Map<Editor.EditorType, {
            editor: Editor<any>;
            container: HTMLDivElement;
        }>;
        protected __activeEditor: {
            editor: Editor<any>;
            container: HTMLDivElement;
        } | null;
        /**
         * Create a new choice editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         */
        constructor(element: HTMLElement, editorInfo: ChoiceEditor.Info, parentControl: Controls.System.baseTcHmiControl);
        /**
         * Create a choice editor info that allows any type.
         */
        static createAnyEditorInfo(): ChoiceEditor.Info;
        /**
         * Create a choice editor info that allows any type.
         */
        static getAnyChoices(): Exclude<ChoiceEditor.Info['choices'], undefined>;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: ChoiceEditor.Info, value: any): value is any;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Handler for the selectionChanged event of the combobox
         */
        protected __onSelectionChanged: () => void;
        /**
         * Handler for the change event of the editor
         */
        protected __onEditorChanged: (editor: Editor<any>) => void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any | null): void;
        /**
         * Gets the current value.
         */
        getState(): Editor.State<any>;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<Editor.LocalizableTexts>): void;
    }
    module ChoiceEditor {
        interface Info extends Editor.Info {
            type: 'choice';
            choices?: Exclude<Editor.EditorInfo, ChoiceEditor.Info>[];
        }
        interface LocalizableTexts {
            comboboxText: Editor.Localization;
        }
    }
}
//# sourceMappingURL=TcHmiRecipeEdit.d.ts.map